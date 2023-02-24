import { StyleSheet} from 'react-native';

export const Styling = StyleSheet.create({
    borderDesign: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        elevation: 1,
        shadowColor: 'black',
    },
    container: {
        flexDirection:'column',
        height: '100%',
        width:'100%',
        padding: 10,
    },
    fonts:{
        justifyContent:'center',
        alignItems:'center'
    }
});