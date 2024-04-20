import React from 'react';

export default function Tab(props) {
    const { title, isChecked, onChange } = props;

    return (
        <>
            <input
                type="radio"
                name="my_tabs"
                role="tab"
                className="tab"
                aria-label={title}
                checked={isChecked}
                onChange={onChange}  // Add onChange to handle tab switch
            />
            <div role="tabpanel" className="tab-content rounded-box py-6 px-4">
                {props.children}
            </div>
        </>
    );
}
