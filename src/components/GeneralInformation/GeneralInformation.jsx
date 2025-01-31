import { useState, useEffect } from "react";
import "./Styles.scss"

const GeneralInformation = ({ currentCardsFruits }) => {

    const [nutrition, setNutrition] = useState({
        totalCalories: 0,
        totalFats: 0,
        totalSugars: 0,
        totalCarbs: 0,
        totalProteins: 0
    })

    useEffect(() => {
        if (currentCardsFruits.length > 0) {
            const newNutrition = currentCardsFruits.reduce(
                (acc, product) => {
                    acc.totalCalories += product.nutritions.calories
                    acc.totalFats += product.nutritions.fat
                    acc.totalSugars += product.nutritions.sugar
                    acc.totalCarbs += product.nutritions.carbohydrates
                    acc.totalProteins += product.nutritions.protein
                    return acc
                },
                { totalCalories: 0, totalFats: 0, totalSugars: 0, totalCarbs: 0, totalProteins: 0 }
            )

            setNutrition(newNutrition)
        }
    }, [currentCardsFruits])

    if (!currentCardsFruits || currentCardsFruits.length === 0) {
        return <div className="loading-message">No products available</div>
    }

    return (
        <section className="info">
            <p className="title">General information</p>
            <div className="gen-info">
                <p>No. of Found Products:</p>
                <p>{currentCardsFruits.length}</p>
            </div>

            <p className="nutrition-title">Nutritional properties of found products</p>
            <div className="nutri-info">
                <div className="labels">
                    <p>Total calories</p>
                    <p>Total fats</p>
                    <p>Total sugars</p>
                    <p>Total carbohydrates</p>
                    <p>Total proteins</p>
                </div>
                <div className="values">
                    <p>{nutrition.totalCalories}</p>
                    <p>{nutrition.totalFats.toFixed(2)}</p>
                    <p>{nutrition.totalSugars.toFixed(2)}</p>
                    <p>{nutrition.totalCarbs.toFixed(2)}</p>
                    <p>{nutrition.totalProteins.toFixed(2)}</p>
                </div>
            </div>
        </section>
    );
};

export { GeneralInformation };