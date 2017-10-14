import React, { Component } from 'react';
import { View, List, ListItem, Left, Body, Text, Right } from 'native-base';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

export const Add = ({ toggleTodo, todos, removeTodo }) => {
	function toggle(id) {
		toggleTodo(id);
	}
	return (
		<View  >
			<List
				dataArray={todos}
				renderRow={(item) => (
					<ListItem  onPress={() => { toggle(item.id) }} >
						<Left >
							{
								(item.completed) &&
								<FontAwesome size={15} name="check" />
								||
								<FontAwesome size={15} name="star" />

							}
						</Left>
						<Body>
							<Text >{(item.text) && item.text}</Text>
						</Body>
						<Right>
							{
								(item.completed) &&
								<FontAwesome size={15} name="check" />
								||
								<FontAwesome size={15} name="star" />

							}
						</Right>
					</ListItem>
				)
				}
			/>
		</View>
	);
}
export default Add;