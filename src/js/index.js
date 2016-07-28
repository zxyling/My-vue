/**
 * Created by Administrator on 2016/7/27.
 */
import myheader from '../components/header';
import myleft  from  '../components/nav-left';
import myfooter from '../components/footer';

import allJob from '../components/allJobs';
import newJob from '../components/newJobs';


import '../css/index.css';



new Vue({
    el:'#app',
    data:{
      currentView:'all-jobs'
    },
    components:{
        "c-header":myheader,
        "c-left":myleft,
        "c-footer":myfooter,
        "all-jobs":allJob,
        "new-jobs":newJob
    }
});