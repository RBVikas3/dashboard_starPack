import React from 'react'
import "rodal/lib/rodal.css"
import Rodal from 'rodal'
import css from "./AddCardModel.module.css"
import { useState } from 'react'

const AddCardModel = ({ visible, onClose, handleCardAdd }) => {
    const customStyle = {
        background: "rgba(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"

    }
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    return (
        <Rodal customStyles={customStyle} visible={visible} onClose={onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>
                        Card title
                    </span>
                    <input type="text" className={css.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <span className={css.label}>
                        Detail
                    </span>
                    <textarea value={detail} onChange={(e) => setDetail(e.target.value)} className={css.input} rows={10} type="text"></textarea>
                </div>
                <button disabled={title === "" && detail === ""} className={css.saveButton} onClick={() => {
                    handleCardAdd(title, detail)
                    setDetail("")
                    setTitle("")
                }}>
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModel