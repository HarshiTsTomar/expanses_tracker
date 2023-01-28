import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import { useContext } from 'react';

const List = () => {
    const classes = useStyles();
    const {deleteTransaction}= useContext(ExpenseTrackerContext);

    const transactions = [
        { id:1, type: 'Income', category: 'salary', amount: 50, date: new Date() }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transacion.id}>
                   <ListItem>
                     <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome :classes.avatarExpense}>
                           <MoneyOff />
                        </Avatar>
                     </ListItemAvatar>  
                     <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}` }/>
                     <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label='delete' onClick="">
                            <Delete />
                        </IconButton>
                     </ListItemSecondaryAction>
                   </ListItem> 
                </Slide>
            ))}
        </MUIList>
    )
}

export default List;