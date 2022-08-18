import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	View,
	} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import UpdateListWithModal from './src/components/UpdateListWithModal';

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaView>
				<ScrollView>
					<View>
						<UpdateListWithModal />
					</View>
				</ScrollView>
			</SafeAreaView>
		</Provider>
	);
};

export default App;
