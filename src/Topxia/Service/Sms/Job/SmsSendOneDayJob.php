<?php
namespace Topxia\Service\Sms\Job;

use Topxia\Service\Crontab\Job;
use Topxia\Service\Common\ServiceKernel;
use Biz\CloudPlatform\CloudAPIFactory;
use Topxia\Service\Sms\SmsProcessor\SmsProcessorFactory;

class SmsSendOneDayJob implements Job
{
    public function execute($params)
    {
        $smsType    = 'sms_live_play_one_day';
        $dayIsOpen  = $this->getSmsService()->isOpen($smsType);
        $parameters = array();
        if ($dayIsOpen) {
            $targetType   = $params['targetType'];
            $targetId     = $params['targetId'];
            $processor    = SmsProcessorFactory::create($targetType);
            $return       = $processor->getUrls($targetId, $smsType);
            $callbackUrls = $return['urls'];
            $count        = ceil($return['count'] / 1000);
            try {
                $api    = CloudAPIFactory::create('leaf');
                $result = $api->post("/sms/sendBatch", array('total' => $count, 'callbackUrls' => $callbackUrls));
            } catch (\RuntimeException $e) {
                throw new \RuntimeException($this->getKernel()->trans('发送失败！'));
            }
        }
    }

    protected function getSmsService()
    {
        return $this->getKernel()->createService('Sms:SmsService');
    }

    protected function getKernel()
    {
        return ServiceKernel::instance();
    }
}
