/**
 * Created by Administrator on 2016/7/27.
 */
import myheader from '../components/header';
import myleft  from  '../components/nav-left';
import myfooter from '../components/footer';
import '../css/template.css'



new Vue({
    el:'#app',
    components:{
        "c-header":myheader,
        "c-left":myleft,
        "c-footer":myfooter
    }
});