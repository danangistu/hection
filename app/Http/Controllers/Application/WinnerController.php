<?php

namespace App\Http\Controllers\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Winner;

class WinnerController extends Controller
{
  public function viewWinner(Request $request,$id){
    $win = Winner::findOrFail($id);
    return view('frontend.winner',[
      'win' => $win
    ]);
  }
}
