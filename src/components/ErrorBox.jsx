import React from 'react'

export default function ErrorBox({ text }) {
    return (

        <div className="alert alert-danger mt-5 mx-auto w-75" role="alert">
            {text}
        </div>
    )
}
