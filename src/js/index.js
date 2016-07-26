/**
 * Created by zhangxiaoyang on 2016/7/25.
 */
import myheader from '../components/header';
import '../css/index.css'
new Vue({
    el:'body',
    components:{
        myheader:myheader
    },
    data(){
        return {
            msg:"你好，vue"
        }
    }
});


