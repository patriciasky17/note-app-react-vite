// import React from 'react';

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
                onChange={onChange} 
            />
            <div role="tabpanel" className="tab-content py-6">
                <div className="flex flex-wrap gap-8">
                    {props.children}
                </div>

            </div>
        </>
    );
}
