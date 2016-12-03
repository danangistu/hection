<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Http\Requests\Admin\PrizeRequest;
use App\Prize;

class PrizeController extends AdminController
{
    private $imageColumn = "picture";
    public function getPrizes()
    {
        $prize = Prize::firstOrFail();
        return $this->getForm($prize);
    }
    public function patchPrizes(Prize $prize, PrizeRequest $request)
    {
        return $this->saveFlashRedirect($prize,$request,$this->imageColumn);
    }
}
