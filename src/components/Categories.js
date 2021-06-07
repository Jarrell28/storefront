import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { getCategories, selectCategory } from '../store/categories';

const Categories = (props) => {

    return (
        <>
            <Typography variant="h4" gutterBottom={true} style={{ marginTop: "2rem" }}>
                Browse our Categories
            </Typography>
            <Typography >
                <Link href="#" className="category-links" onClick={e => props.selectCategory("")}>All</Link>

                {props.categories.categories.map((category, idx) => {
                    return <Link key={idx} href="#" className="category-links" onClick={e => props.selectCategory(e.target.innerHTML)}>{category.name}</Link>
                })}
            </Typography>
        </>
    )
}


const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = { getCategories, selectCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);