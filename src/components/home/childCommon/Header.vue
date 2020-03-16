<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe606;</span>
        </div>
        <div class="header-input">
            <label class="label">
                <span class="iconfont">&#xe6a6;</span>
                <input type="text" class="input" placeholder="搜城市/景点/游玩主主题" />
            </label>
        </div>
        <router-link to="/city">
            <div class="header-right">
                城市
                <span class="iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
        name:'HomeHeader'
    }
</script>
<style lang="less" scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        background-color: #00bcd4;
        height: .86rem;
        line-height: .86rem;
        z-index: 10;
        .header-left{
            width: .64rem;
            text-align: center;
            color: #fff;
        }
        .header-input{
            flex: 1;

            .label{
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                span{
                    position: absolute;
                    padding-left: .1rem;
                }
                .input{
                    width: 100%;
                    height: 100%;
                    height: .64rem;
                    line-height: .64rem;
                    background-color: #fff;
                    border-radius: .1rem;
                    text-indent: .5rem;
                }
            }
        }
        .header-right{
            width: 1.24rem;
            text-align: center;
            color: #fff;
        }
    }
</style>