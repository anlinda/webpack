import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class HomeList extends React.Component {
	render(){
		return (
			 <List className="my-list">
			     <Item
			          arrow="horizontal"
			          multipleLine
			          onClick={() => {}}
			          platform="android"
			        >
			          ListItem （Android）<Brief>设置了Click事件会有material水波纹点击效果</Brief>
			        </Item>
			 </List>
		)
	}
}
