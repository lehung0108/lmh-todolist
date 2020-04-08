import React, { useEffect, useCallback } from 'react';
import './modal.css'

const Modal = ({ 
    onOk,
    title,
    width = 700,
    children,
    onCancel,
    isVisible,
    renderFooter,
    isRenderHeader = true,
    isRenderCloseIcon
}) => {

    const _onOk = useCallback(()=>{
        if(onOk && typeof onOk === 'function') {
            onOk();
        }
    }, [onOk]);

    const _onCancel = useCallback(() => {
        if(onCancel && typeof onCancel === 'function') {
            onCancel();
        }
    }, [onCancel]);


    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if(e.keyCode === 27) {
                _onCancel();
            }
           
        })
        return document.removeEventListener('keyup', () => {});
    }, [_onCancel])

    useEffect(() => {
        if(isVisible) {
            // Modal open ==> them class vao cho body
            document.querySelector('body').classList.add('lmh-modal-open');
        } else {
            //Modal close ==> remove class tu body
            document.querySelector('body').classList.remove('lmh-modal-open');
        }
    }, [isVisible])

    const _renderFooter = () => {
        if(renderFooter && typeof renderFooter === 'function') {
            return renderFooter();
        }
        return (
            <>
                <button onClick={_onCancel}>Cancel</button>
                <button onClick={_onOk}>Ok</button>
            </>
        )
    }


    return (
        <div className={`lmh-modal-wrapper ${isVisible ? 'show' : ''}`}>
            <div className="lmh-mark" onClick={_onCancel}></div>    
            <div className="lmh-dialog">
                <div className="lmh-modal-content" style={{width}}>
                        {
                            isRenderHeader && <div className="lmh-modal-header">
                                <h3>{title}</h3>
                                {
                                    isRenderCloseIcon && 
                                    <i 
                                        onClick={_onCancel} 
                                        className="lmh-modal-close ion-close-round"
                                    ></i>
                                }
                            </div>
                        }
                        <div className="lmh-modal-body">{children}</div>
                        <div className="lmh-modal-footer">{ _renderFooter()}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;