import React, { Component } from 'react'
import {connect} from 'react-redux';

//导入action creator
import { initPersonList, deletePersonList } from '../../store/action';

class PersonTable extends Component {
    componentWillMount(){
        //请求数据
        var personList=require('../../json/persons.json');
        //传输到容器中
        this.props.init(personList)
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>身份</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.personList.map((val,i)=>(
                        <tr key={i}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.identity}</td>
                            <td>{val.sex}</td>
                            <td>
                                <a href="#" onClick={()=>this.props.remove(i)}>删除</a>&nbsp;
                                <a href="#" onClick={()=>this.props.edit(i)}>修改</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
//箭头函数
const mapStateToProps=(state)=>({
    personList:state.personList
});
const mapDispatchToProps=(dispatch,parentProps)=>({
    init:(payload)=>{
        dispatch(initPersonList(payload));
    },
    remove:(index)=>{
        //删除数据
        dispatch(deletePersonList(index))
    },
    edit:(index)=>{
        //1.让对话框显示
        // parentProps.show();
        //2.要设置下标，让修改的对话框知道修改数组中的哪一项
        parentProps.setNowIndex(index);

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonTable)