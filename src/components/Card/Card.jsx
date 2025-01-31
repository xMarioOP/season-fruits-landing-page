import { useState, useEffect } from "react";
import "./Styles.scss"

const Card = ({ fruit }) => {
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        const savedLikeStatus = localStorage.getItem(`liked_${fruit.name}`)
        if (savedLikeStatus) {
            setLiked(JSON.parse(savedLikeStatus))
        }
    }, [fruit.name])


    const handleLikeClick = () => {
        const newLikedStatus = !liked
        setLiked(newLikedStatus)
        localStorage.setItem(`liked_${fruit.name}`, JSON.stringify(newLikedStatus))
    }

    const handleImageError = (e) => {
        e.target.src = "/images/not-available.webp"
    }

    const likeIconClass = `bi bi-heart-fill like-icon ${liked ? 'liked' : ''}`

    return (
        <div className="card">

            <div className="img-container">
                <i className={likeIconClass} onClick={handleLikeClick}></i>
                <img
                    src={`/images/${fruit.name}.jpg`}
                    alt="Lychee"
                    onError={handleImageError}
                />

            </div>

            <div className="card-content">

                <h2 className="fruit">{fruit.name}</h2>

                <div className="info-section taxonomic">
                    <div className="info-labels">
                        <p>Family:</p>
                        <p>Order:</p>
                        <p>Genus:</p>
                    </div>
                    <div className="info-values">
                        <p>{fruit.family}</p>
                        <p>{fruit.order}</p>
                        <p>{fruit.genus}</p>
                    </div>
                </div>


                <h2 className="nutritions-title">Nutritions</h2>

                <div className="info-section nutritional">
                    <div className="nutrition-container">
                        <div className="nutrition-labels">
                            <p>Calories</p>
                            <p>Fat</p>
                            <p>sugar</p>
                            <p>Carbohydrates</p>
                            <p>Protein</p>
                        </div>
                        <div className="nutrition-values">
                            <p>{fruit.nutritions.calories}</p>
                            <p>{fruit.nutritions.fat}</p>
                            <p>{fruit.nutritions.sugar}</p>
                            <p>{fruit.nutritions.carbohydrates}</p>
                            <p>{fruit.nutritions.protein}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Card };


