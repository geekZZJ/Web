import $ from 'jquery'
class Base {
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>6</em>元',
            name:'任二'
        })
        .set('r3',{
            bonus:19,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>19</em>元',
            name:'任三'
        })
        .set('r4',{
            bonus:78,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>78</em>元',
            name:'任四'
        })
        .set('r5',{
            bonus:540,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>540</em>元',
            name:'任五'
        })
        .set('r6',{
            bonus:90,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>90</em>元',
            name:'任六'
        })
        .set('r7',{
            bonus:26,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>26</em>元',
            name:'任七'
        })
        .set('r8',{
            bonus:9,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em>9</em>元',
            name:'任八'
        })
    }
    initNumber(){
        for (let i=1;i<12;i++){
            this.number.add((''+1).padStart(2,'0'))
        }
    }
    setOmit(omit){
        let self = this;
        self.omit.clear();
        for (let [index,item] of omit.entries()) {
            self.omit.set(index,item)
        }
        $(self.omit_el).each(function (index,item) {
            $(item).text(self.omit.get(index))
        });
    }

    setOpenCode(code){
        let self = this;
        self.open_code.clear();
        for (let item of code.value()){
            self.open_code.add(item);
        }
        self.updateOpenCode&&self.updateOpenCode.call(self,code);
    }

    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }

    changePlayNav(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play = $cur.attr('desc').toggleCodeActive();
        $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
        $('boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
    }
    assistHandle(e){
        e.preventDefault();
        let self = this;
        let $cur = $(e.currentTarget);
        let index = $cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        if (index === 0){
            $('.boll-list .btn-boll').addClass('btn-boll-active');
        }
        if (index ===1){
            $('.boll-list .btn-boll').each(function (i,t) {
                if (t.textContent-5>0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 2) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent - 6 < 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 3) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent % 2 == 1) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 4) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent % 2 == 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        self.getCount();
    }
    getName(){
        return this.name
    }
    addCode(){
        let self = this;
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
        let active = $active?$active.length:0;
        let count = self.computeCount(active,self.cur_play);
        if (count){
            self.addCodeItem($active.join(''),self.cur_play,self.play_list.get(self.cur_play).name,count);
        }
    }

    addCodeItem(){
        let self = this;
    }
}