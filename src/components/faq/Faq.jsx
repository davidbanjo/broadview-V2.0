import { useState } from 'react'
import './faq.css'
import { q_ans_staffing, q_ans_marketing } from './q-a.js'

const Faq = ({ service }) => {

    const serviceType = service
    const [clickedItem, setClickedItem] = useState(null)

    const handle_click = (itemId) => {
        setClickedItem(itemId === clickedItem ? null : itemId)
    }

    return (
        <div className="container faq">
            <div className="container">
                <div className="row">
                    <div className="bts-spacer-x1"></div>
                    <h3>
                        Frequently Asked Questions
                    </h3>
                    <div className="col-sm-12">
                        <div className="accordions">
                            {/* <!-- 1st accordion menu --> */}
                            {serviceType === "staffing" ? q_ans_staffing.map((q_a) => (
                                <div
                                    key={q_a.id}
                                    className="accordion-item"
                                    onClick={() => handle_click(q_a.id)}
                                >
                                    <div
                                        className={`accordion-title ${q_a.id === clickedItem  ? "active-title" : ""}`}
                                        data-tab={`item${q_a.id}`}
                                    >
                                        <h3>
                                            {q_a.question}
                                            
                                            {q_a.id === clickedItem ?
                                                <i className="fa fa-chevron-down" /> :
                                                <i className="fa fa-chevron-up" />
                                            }
                                        </h3>
                                    </div>
                                    {q_a.id === clickedItem && (
                                        <div
                                            className="accordion-content active"
                                            id={`item${q_a.id}`}
                                        >
                                            <p>{q_a.answer}</p>
                                        </div>
                                    )}
                                </div>
                            )) : q_ans_marketing.map((q_a) => (
                                <div
                                    key={q_a.id}
                                    className="accordion-item"
                                    onClick={() => handle_click(q_a.id)}
                                >
                                    <div
                                        className={`accordion-title ${q_a.id === clickedItem  ? "active-title" : ""}`}
                                        data-tab={`item${q_a.id}`}
                                    >
                                        <h3>
                                            {q_a.question}
                                            
                                            {q_a.id === clickedItem ?
                                                <i className="fa fa-chevron-down" /> :
                                                <i className="fa fa-chevron-up" />
                                            }
                                        </h3>
                                    </div>
                                    {q_a.id === clickedItem && (
                                        <div
                                            className="accordion-content active"
                                            id={`item${q_a.id}`}
                                        >
                                            <p>{q_a.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq