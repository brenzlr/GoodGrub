import { RecipeCard } from "../components/RecipeCard";
import "../components/RecipeCard.css";
import Carousel from "react-elastic-carousel";
import { RecipeData } from "../components/RecipeData";

// import Footer from "../components/Footer";
export function Recipes() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
  ];

  return (
    <div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Browse Recipes</h1>;
      <div className="body">
        <h3 style={{ textAlign: "center" }}>Here's some salads</h3>
        {/* <Carousel breakPoints={breakPoints}> */}
        <div className="wrapper">
          <RecipeData></RecipeData>
          {/* <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />*/}
        </div>
        {/* </Carousel> */}

        <br></br>

        <h3 style={{ textAlign: "center" }}>Here's some more... salads!</h3>
        <Carousel breakPoints={breakPoints}>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
          <div className="wrapper">
            <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="The Everyday Salad"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Recipes;
