import { MenuItem } from 'react-pro-sidebar'
import React, { FC } from 'react'
import { IListItem } from '../../schemas'

interface Props {
    menuItem: IListItem
    handleItemClick: (menuItem: IListItem) => void
}

const Item: FC<Props> = ({ menuItem, handleItemClick }) => {
    const { link, name } = menuItem

    return (
        <MenuItem
            style={{ zIndex: 10, backgroundColor: '#DEE2E6' }}
            key={`mi-${name}/${link}`}
            title={name}
            onClick={() => handleItemClick(menuItem)}
        >
            {name}
        </MenuItem>
    )
}

export default Item
