import {useState} from 'react';

export interface ModalProps {
    visible: boolean;
    hideModal: () => void;
    [index: string]: any;
}

export const useModal = (): [() => void, ModalProps] => {
    const [visible, updateVisible] = useState(false);
    const hideModal = () => updateVisible(false);
    const showModal = () => updateVisible(true);

    return [showModal, {visible, hideModal}];
}
