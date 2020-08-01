import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { addPersonList } from '../../store/action';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import 'handsontable/languages/zh-CN';

const FormulaParser = require('hot-formula-parser').Parser;
let that = null;
let hot = null;
let parser = null;

class HotTableDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        that = this;
        this.hotTableComponent = React.createRef();
        this.hotSettings = {
            stretchH: "last",
            language: "zh-CN",
            rowHeights: 40,
            colWidths: 100,
            rowHeaders: true,
            colHeaders: true,
            contextMenu: true,
            readOnlyCellClassName: 'is-readOnly',
            activeHeaderClassName: 'ht__active_highlight',
            nestedHeaders: [
                ['姓名', '年龄', '职业', '性别', '备注'],
            ],
            data: require('../../json/persons.json'),
            columns: [
                {name: "姓名", data: "name"},
                {name: "年齡", data: "age"},
                {name: "职业", data: "identity"},
                {name: "性别", data: "sex"},
                {name: "备注", data: "description"},
              ],
        }
    }

    componentDidMount() {
        hot = this.hotTableComponent.current.hotInstance
        Handsontable.hooks.add("afterOnCellMouseDown", this.myCallback, hot)
        parser = new FormulaParser();
    }
    add = () => {
        parser.on('callVariable', function(name, done) {
            if (name === 'foo') {
                done(Math.PI / 2)
            }
        });
        console.log(parser.parse('SUM(SIN(foo), COS(foo))'));
    }

    myCallback = (event, coords, TD) => {
        // hot.setCellMeta(coords, row, coords.col, 'name', '555')
        let cellData = hot.getCellMeta(coords.row, coords.col)
        console.log(cellData)
    }

    swapHotData() {
        hot.loadData([['new', 'data']]);
    }

    render() {

        return (
            <div className="hotTableStyle">
                <Button onClick={this.add}>点击</Button>
                <HotTable id="hot" ref={this.hotTableComponent} settings={this.hotSettings} width="100%" height="500px" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HotTableDemo)