import { useContext, useEffect, useState } from "react";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import { ContentWrapper } from "./TOS";
import { H3 } from "./UserAccount/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RecipesInfoContext } from "./Home/Recipes/RecipesInfo";

import styled from "styled-components";

const MyFavorites = () => {

    useEffect(() => {
        document.title = "My Favorites"
    }, []);

    const [labelName, setLabelName] = useState("Add details");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

    const { list, setList } = useContext(RecipesInfoContext);


  const editBtn = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const saveBtn = async (item, listDescription) => {
    setLabelName(inputValue);
    setIsEditing(false);

    await fetch(`/api/updateDescription/${item}`, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: item.label,
            description: listDescription
        })
      });
  };

  const cancelBtn = () => {
    setInputValue(labelName);
    setIsEditing(false);
  };

    const removeRecipe = async (id) => {
        const updatedList = [...list];
        updatedList.splice(id, 1);
        setList(updatedList);

        await fetch(`/api/deleteFavorite/${id}`, {
            method: 'DELETE',
          });
    };


    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>My Favorites</H1>
            <br/>
            <ContentWrapper>
                <H3 style={{textAlign:"center"}}>Browse through your favorite recipes below!</H3>
                <br/>
                <br/>
                <br/>
                <br/>
                {list.map((item, index) => (
                <FavoritesCard>
                    <ul key={index} style={{color:"white"}}>
                        <li>
                            <h2 style={{color:"white"}}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{color:"white"}}>{item.label} </a> 
                            | {Math.round(item.calories)} calories</h2>
                        <button onClick={() => removeRecipe(item.label)}>Remove</button>
                        
                        </li>
                        <br/>
                    </ul>
                </FavoritesCard>
                ))}
                {isEditing ? (
                           <div>
                             <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a description" />
                             <button style={{margin:"10px"}} onClick={saveBtn}>Save</button>
                             <button onClick={cancelBtn}>Cancel</button>
                           </div>
                         ) : (
                           <div>
                             <span>
                                <i>{labelName}</i>
                            </span>
                             <button style={{margin:"10px"}} onClick={editBtn}>Edit</button>
                           </div>
                        )}
                <br/>
                <br/>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

const FavoritesCard = styled.div`
    background-color: #28502E;
    border-radius: 10px;
    margin: 40px 10px;
`

export default MyFavorites;