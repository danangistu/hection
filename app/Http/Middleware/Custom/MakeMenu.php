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

            $cms = $menu->add($this->translate('cms.root'), '#')
                ->icon('circle-o')
                ->prependIcon();

                $cms->add($this->translate('cms.slider'), ['route' => 'admin.slider.index'])
                    ->icon('picture-o')
                    ->prependIcon();

                $cms->add($this->translate('cms.about'), ['route' => 'admin.about.index'])
                    ->icon('info-circle')
                    ->prependIcon();

                $cms->add($this->translate('cms.contest'), ['route' => 'admin.contest.index'])
                    ->icon('certificate')
                    ->prependIcon();

                $cms->add($this->translate('cms.day'), ['route' => 'admin.day.index'])
                    ->icon('diamond')
                    ->prependIcon();
                $cms->add($this->translate('cms.program'), ['route' => 'admin.program.index'])
                    ->icon('asterisk')
                    ->prependIcon();
                $cms->add($this->translate('cms.sponsor'), ['route' => 'admin.sponsor.index'])
                    ->icon('star')
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
