import React, { Fragment, useState, useEffect } from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";



const Chat = (props) => {

    const chatProps = useMultiChatLogic("project_id_key", props.user.username, props.user.secret);

    return (
        <Fragment>
            <div style={{height: '100vh'}}>
               <MultiChatSocket {...chatProps}></MultiChatSocket>
               <MultiChatWindow {...chatProps} style={{height: '100vh'}}></MultiChatWindow>
            </div>
        </Fragment>
    );


}

export default Chat;