import React from 'react'

export default function Spinner() {
    return (
        <div className="text-center mt-5 mx-auto">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
