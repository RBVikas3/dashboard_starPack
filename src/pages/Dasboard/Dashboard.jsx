import css from './Dashboard.module.css'
import { groupNumber } from "../../data"
import { cardsData } from "../../data"
import Statistics from '../../components/Statistics/Statistics'
import Order from '../../components/Orders/Order'
const Dashboard = () => {
    console.log("cardsData", cardsData)
    return (
        <div className={css.continer}>
            <div className={css.dashboard}>
                <div className={`${css.dashBoardHead} theme-container`}>


                    <div className={css.head}>
                        <span>Dashboard</span>
                        <div className={css.durationButton}>
                            <select>
                                <option value="">1 Week</option>
                                <option value="">1 Month</option>
                                <option value="">1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        {
                            cardsData.map((card, index) => (
                                <div className={css.card}>

                                    <div className={css.cardHead}>

                                        <span>
                                            {card.title}
                                        </span>
                                        <span>
                                            +{card.change}
                                        </span>
                                    </div>
                                    <div className={css.cardAmount}>
                                        <span>$</span>
                                        <span>{groupNumber(card.amount)}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Statistics />
            </div>
            {/* <div className={css.order}> */}
            <Order />
            {/* </div> */}
        </div>
    )
}

export default Dashboard