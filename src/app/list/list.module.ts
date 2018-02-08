import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';

// Ignite UI モジュールの参照
import {
    IgxIconModule, IgxScrollModule, IgxAvatarModule,
    IgxLabelModule, IgxInput, IgxDatePickerModule, IgxButtonModule, IgxRippleModule,
    IgxToastModule, IgxDialogModule, IgxCheckboxModule, IgxSwitchModule, IgxSliderModule,
    IgxRadioModule
} from 'igniteui-angular/main';

const listRoutes: Routes = [
    {
        // 親パスと子パスを設定
        path: 'list', component: ListComponent, children: [
            // detail をパスとして指定したら Detail コンポーネントを表示。idがパラメーター
            { path: 'detail/:id', component: DetailComponent },
            // new をパスとして指定したら New コンポーネントを表示
            { path: 'new', component: NewComponent }
        ]
    }
];

@NgModule({
    declarations: [
        ListComponent,
        DetailComponent,
        NewComponent
    ],
    imports: [
        // ルートモジュールを子パスを含めて登録
        RouterModule.forChild(listRoutes),
        CommonModule,
        FormsModule,
        IgxScrollModule, // Ignite UI Scroll モジュールの追加
        IgxAvatarModule, // Ignite UI Avatar モジュールの追加
        IgxLabelModule, // Ignite UI Label モジュールの追加
        IgxInput, // Ignite UI Input の追加
        IgxDatePickerModule, // Ignite UI DatePicker モジュールの追加
        IgxButtonModule, // Ignite UI Button モジュールの追加
        IgxRippleModule, // Ignite UI Ripple モジュールの追加
        IgxToastModule, // Ignite UI Toast モジュールの追加    
        IgxDialogModule,　// Ignite UI Dialog モジュールの追加
        IgxCheckboxModule, // Ignite UI Checkbox モジュールの追加
        IgxSwitchModule, // Ignite UI Switch モジュールの追加
        IgxSliderModule,　// Ignite UI Slider モジュールの追加
        IgxRadioModule,　// Ignite UI Slider モジュールの追加],
    ],
    exports: [RouterModule]
})
export class ListModule { }