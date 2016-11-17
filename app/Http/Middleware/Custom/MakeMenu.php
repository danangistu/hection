<?php

namespace App\Http\Middleware\Custom;

use Closure;
use Menu;

class MakeMenu
{
    /**
     * @var string
     */
    private $circle = "circle-o";

    /**
     * Set menus in middleware as sessions are not stored already in service providers instead
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->makeAdminMenu();
        return $next($request);
    }

    private function makeAdminMenu()
    {
        Menu::make('admin', function ($menu) {
            $menu->add($this->translate('dashboard'), ['route' => 'admin.root'])
                ->icon('dashboard')
                ->prependIcon();

            $sliders = $menu->add($this->translate('slider.root'), '#')
                ->icon('picture-o')
                ->prependIcon();

            $sliders->add($this->translate('slider.add'), ['route' => 'admin.slider.create'])
                ->icon('plus')
                ->prependIcon();

            $sliders->add($this->translate('slider.all'), ['route' => 'admin.slider.index'])
                ->icon('circle-o')
                ->prependIcon();

            $menu->add($this->translate('about'), ['route' => 'admin.about.index'])
                ->icon('info-circle')
                ->prependIcon();

            $contest = $menu->add($this->translate('contest.root'), '#')
                ->icon('certificate')
                ->prependIcon();

            $contest->add($this->translate('contest.add'), ['route' => 'admin.contest.create'])
                ->icon('plus')
                ->prependIcon();

            $contest->add($this->translate('contest.all'), ['route' => 'admin.contest.index'])
                ->icon('circle-o')
                ->prependIcon();

            $users = $menu->add($this->translate('user.root'), '#')
                ->icon('users')
                ->prependIcon();

            $users->add($this->translate('user.add'), ['route' => 'admin.user.create'])
                ->icon('plus')
                ->prependIcon();

            $users->add($this->translate('user.all'), ['route' => 'admin.user.index'])
                ->icon($this->circle)
                ->prependIcon();

            $menu->add($this->translate('setting'), ['route' => 'admin.setting.index'])
                ->icon('gears')
                ->prependIcon();

        });
    }

    private function translate($resource)
    {
        return '<span>' . trans('admin.menu.' . $resource) . '</span>';
    }
}
