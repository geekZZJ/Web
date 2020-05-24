//模拟一个音乐播放器

class AudioPlayer {
    constructor(container) {
        this.container = document.querySelector(container)

        this.songsList = []
        this.dom = null
        this.audio = new Audio()
        this.status = 0

        this.getSongs()
        this.createElement()
        this.bindEvents()
        this.render()
    }

    getSongs() {
        //ajax
        this.songsList = [
            {
                cover: '',//封面
                url: '.map3',//资源地址
                singer: {},//歌手信息
                name: ''//歌曲名字
            }
        ]
    }

    createElement() {
        //生成dom
        const div = document.createElement('div')
        div.innerHTML = `<div class="btn">播放按钮</div>
                         <div>进度条</div>
                        `
        this.dom = div
    }

    bindEvents() {
        this.dom.querySelector('.btn').addEventListener('click',()=>{
            console.log('开始播放')
        })
    }

    render(){
        this.container.appendChild(this.dom)
    }
}

new AudioPlayer('#app')