const getList = (author, keyword) => {
    //先返回假数据(格式是正确的)
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题A',
            content: '内容A',
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    //先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含title content属性
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    // console.log('update blog', id, blogData)
    return true
}

const delBlog = (id) => {
    // console.log('del blog', id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}