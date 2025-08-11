import { Fragment, h, VNode } from 'preact';
import { useState } from 'preact/hooks';
import './style.css';

interface Props {
}

export default function App(props: Props): VNode {
    const [showDialog, setShowDialog] = useState(false);
    function toggleDialog() {
        setShowDialog(prev => !prev);
    }

    return (
        <Fragment>
            {showDialog && <Dialog onClose={toggleDialog} />}
            {/* <Dialog onClose={toggleDialog} /> */}
            <Widget onClick={toggleDialog} />
        </Fragment>
    );
}


const Widget = ({ onClick }) => (
    <div class="widget" onClick={onClick}>
    </div>
);

const Dialog = ({ onClose }) => (
    <div class="chatbox" onClick={onClose}>
    </div>
);