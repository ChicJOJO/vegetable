import Vue from 'vue';

//1.底部导航
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

//2.loading
import { Loading } from 'vant';

Vue.use(Loading);


//3.图片懒加载
import { Image } from 'vant';

Vue.use(Image);

//4.提示
import {Toast} from "vant";
Vue.use(Toast);

//5.蒙版提示
import {Dialog} from "vant";
Vue.use(Dialog);

//6.导航条
import { NavBar } from 'vant';

Vue.use(NavBar);

//7.联系人
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.use(ContactCard).use(ContactList).use(ContactEdit);

//8.地址列表
import { AddressList } from 'vant';

Vue.use(AddressList);

//9.添加地址
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
//10.单元格
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

//11.提交订单
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

//12.宫格
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
