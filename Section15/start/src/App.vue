<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="">Username</label>
                  <input type="text"  class="form-control" v-model="user.username">
                  <small id="helpId" class="text-muted">Help text</small>
                </div>

                <div class="form-group">
                  <label for="">Email</label>
                  <input type="email"  class="form-control" v-model="user.email">
                  <small id="helpId" class="text-muted">Help text</small>
                </div>
                <button class="btn btn-primary" v-on:click="submit">Submit</button>
                <hr>
                <button class="btn btn-info" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users">
                        {{user.username}} - {{user.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                user:{
                    username:'',
                    email:''
                },
                users:[],
                resource:{}
            }
        },
        methods:{
            submit(){
                // this.$http.post('user.json',this.user)
                // .then(response=>{
                //     console.log(response);
                // },error=>{
                //     console.log(error);
                // });
                // this.resource.save({},this.user)
                this.resource.saveAlt(this.user);
            },
            fetchData(){
                this.$http.get('user.json')
                .then(response=>{
                    return response.json();
                })
                .then(user=>{
                    const resultArray=[];
                    for(let key in user){
                        console.log(user[key]);
                        resultArray.push(user[key]);
                    }
                    // for(let key in user){
                    //     let temp=[];
                    //     for(let value in user[key]){
                    //         console.log(user[key]);
                    //         console.log(value);
                    //         temp.username=value.username;
                    //         temp.email=value.email;
                    //     }
                    //     resultArray.push(temp);
                    // }
                    this.users=resultArray;
                });
            }
        },
        created(){
            const customAction={
                saveAlt:{methods:'POST',url:'altenative.json'}
            };
            this.resource=this.$resource('user.json',{},customAction);
        }
    }
</script>

<style>
</style>
