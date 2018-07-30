<template>
    <div id="all">
        <headComponent></headComponent>
    <ul class=""  style="position: fixed;right: 0;top: 45px;z-index: 1;margin: 4px;list-style-type:none;text-align: center;height: 100%;font-family: 黑体;font-size: 16px;">
				<li  v-for="(num,index) in list"  v-on:click="num_test_list(index)">
					{{num.name}}
				</li>
			</ul>	
			
			<div class=" public_all" id="public">
				<div class="public_out">
					<div id="" class="public_img">
						<img src="../../assets/wechat/new_friend.png" />
					</div>
					<div id="" class="public_name">
						新的朋友
					</div>
				</div>
				<div class="public_out">
					<div id="" class="public_img">
						<img src="../../assets/wechat/Group_chat.png" />
					</div>
					<div id="" class="public_name">
						群聊
					</div>
				</div>
				<div class="public_out">
					<div id="" class="public_img">
						<img src="../../assets/wechat/label.png" />
					</div>
					<div id="" class="public_name">
						标签
					</div>
				</div>
				<div class="public_out">
					<div id="" class="public_img">
						<img src="../../assets/wechat/Public_number.png" />
					</div>
					<div id="" class="public_name">
						公众号
					</div>
				</div>
			</div>
            <bottomComponent></bottomComponent>
    </div>
    
</template>
<script>

import bottomComponent from './Bottom.vue'
import headComponent from './head_top.vue'
export default {
    data(){
        return{
         list: [ {name:'↑'}, {name: '☆'}, {name:'A'},{name:'B'},{name: 'C'}, {name:'D'},{name:'E'}, {name:'F'}, {name:'G' },{name:'H'},{name: 'I'},{name:'J'},{name:'K'},{name: 'L'},{name: 'M'},{name: 'N'},{name: 'O'},{name:'P'},{name:'Q'}, {name:'R'}, {name:'S'},{name: 'T'}, {name:'U'}, {name:'V'},{name:'W'}, {name:'X'},{name:'Y'}, {name:'Z'},{name: '#'}]    
        ,
        index:-1
        } 
    },
    components: {
	  bottomComponent,
	  headComponent
    } ,
     methods:{
       num_test_list(index){
        this.index=index;
			console.log(this.index)
			
		   
	   }
    },
	
}

</script>
<style>
* {
				padding: 0px;
				margin: 0px;
				border: 0px;
			}
			
			.public_out {
				margin: 10px 18px 6px 14px;
				height: 45px;
				border-bottom: 1px solid #EEEEEE;
				
			}
			.public_img {
				float: left;
				margin-right: 14px;
			}
			
			.public_name {
				font-family: 黑体;
				padding-top: 10px;
			}
			
			.public_all {
				margin-top: 60px;
				height: 220px;
				text-align: left
			}
</style>


