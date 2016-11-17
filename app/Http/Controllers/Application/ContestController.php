<?php

namespace App\Http\Controllers\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contest;

class ContestController extends Controller
{
  public function viewContest(Request $request, $id){
    $con = Contest::findOrFail($id);
    return view('frontend.contest',[
      'con' => $con
    ]);
  }
}
