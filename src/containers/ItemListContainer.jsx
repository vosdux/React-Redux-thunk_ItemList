import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
    const { items, hasErrored, isLoading } = state
    return {
        hasErrored,
        isLoading,
        items
    }
}

export default connect(mapStateToProps)(ItemList);

