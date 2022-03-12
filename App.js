/*
  Created by Haim Aharon Zilberman
  12/03/2022
  The program is dedicated to fetch users from GitHub API
  and display them in a FlatList
*/

import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import UserCard from "./src/components/UserCard";
import ItemSeparator from "./src/components/ItemSeparator";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    //An actual fetching function
    fetchUsers() {
        const lastId = this.state.data[this.state.data.length - 1] != undefined ? this.state.data[this.state.data.length - 1].id : 0
        const uri = `https://api.github.com/users?since=${encodeURIComponent(lastId)}&per_page=30`
        this.setState({ refreshing: true });
        fetch(uri)
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: [...this.state.data, ...resJson] });
                this.setState({ refreshing: false });
            }).catch(error => alert(error));
    }

    renderItemComponent = (data) =>
      <UserCard userImage={data.item.avatar_url} userName={data.item.login}/>

    handleRefresh = () => {
      // To avoid multiple requests to API
        if(!this.state.refreshing) {
          this.setState({ refreshing: false }, () => { this.fetchUsers() });
        }
    }

    render() {
      return (
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={this.handleRefresh}
            onEndReachedThreshold={.8}
          />
        </SafeAreaView>)
    }
}