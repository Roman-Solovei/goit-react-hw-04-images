import React, { useState, useEffect } from "react";
import "./App.module.css"
import Searchbar from "./Searchbar"
import ImageGallery from "./ImageGallery"
import Button from "./Button";
import Loader from "./Loader"
import Modal from "./Modal";


export default function App() { 
    
    const [pending, setPending] = useState(false);
    const [page, setPage] = useState(1);   
    const [searchQuery, setSearchQuery] = useState("");    
    const [images, setImages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [modalTags, setModalTags] = useState("");
   
    useEffect(() => {
        if (pending) {
            fetch(
                `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=24779492-e45231f5fdfd8f5bb8624d13c&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
                    if (response.ok) {                       
                        setPending(false)
                        return response.json()
                    }
                }
                ).then(console.log()).then((img => {
                    console.log(img)
                    if (img.totalHits !== 0)
                        setImages(
                            (prevState) => (                            
                                page > 1
                                    ? [...prevState, ...img.hits]
                                    : img.hits
                            )
                        )
                })).catch((error) => console.log(error))
        }
    },[page, pending, searchQuery]);

    const setQuery = (event) => {       
        setSearchQuery(event.currentTarget.value)
    };
    
    const searchReset = (event) => {
        event.preventDefault();
        setPending(true);
        setPage(1);
        setImages([]);        
    };

    const nextPage = () => {
        setPending(true);
        setPage(prevState => prevState + 1)        
    };

    const modalToggle = (image, tags) => {        
        setModalVisible(prevState => !prevState);
        setModalImage(image);
        setModalTags(tags)
      
    };
   
    return(
        <div>               
            <Searchbar  
                setQuery={ setQuery }    
                searchQueryValue={ searchQuery }                
                searchReset={ searchReset }    
            />

            { pending && page === 1 ? <Loader /> : images.length > 0 ? <ImageGallery images={ images } modalToggle={ modalToggle } /> : null }    
                
            {images.length > 0 ? <Button nextPage={ nextPage } /> : null }
                
            {modalVisible && <Modal modalToggle={ modalToggle } image={ modalImage } tags={ modalTags }/> }
        </div>
    )
  
};





// export default class App extends Component { 
//     state = {
//         pending: false,
//         page: 1,
//         pagination: 12,
//         searchQuery: "",
//         key: "24779492-e45231f5fdfd8f5bb8624d13c",
//         mainUrl: "https://pixabay.com/api/",
//         searchSettings: "?image_type=photo&orientation=horizontal&safesearch=true&",        
//         images: [],
//         modalVisible: false,
//         modalImage: "",
//         modalTags:""
//     }

//     componentDidUpdate() {
//         if (this.state.pending) {
//             fetch(
//                 `${this.state.mainUrl}?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.pagination}`).then(response => {
//                     if (response.ok) {
//                         // console.log(response.json())
//                         this.setState({ pending: false })
//                         return response.json()                        
//                     }                   
//                 }
//             ).then(console.log()).then((img => {
//                 console.log(img)
//         if (img.totalHits !== 0)
//              this.setState(            
//             (prevState) => ({
//             images:
//               this.state.page > 1
//                 ? [...prevState.images, ...img.hits]
//                 : img.hits
//             })               
//             )
//         })).catch((error) => console.log(error))            
//         }
//     };

//     setQuery = (event) => {
//         // console.log(event)
//         this.setState({ searchQuery: event.currentTarget.value })
//     };
    
//     searchReset = (event) => {
//         event.preventDefault()
//         this.setState({ pending: true, page: 1, images: [] })
//     };

//     nextPage() {
//         this.setState(prevState => ({
//             pending: true,
//             page: prevState.page + 1,
//         }))
//     };

//     modalToggle = (image, tags) => {
//         console.log(image)
//         console.log(tags)
//         this.setState(prevState => ({ modalVisible: !prevState.modalVisible, modalImage: image, modalTags: tags }))
//     };

//     render() {
//         const { searchQuery, page, pending, images, modalImage, modalTags } = this.state;
//         return(
//             <div>               
//                 <Searchbar  
//                     setQuery={ this.setQuery }    
//                     searchQueryValue={ searchQuery }                
//                     searchReset={ this.searchReset }    
//                 />

//                 { pending && page === 1 ? <Loader /> : images.length > 0 ? <ImageGallery images={ images } modalToggle={ this.modalToggle } /> : null }    
                
//                 {images.length > 0 ? <Button nextPage={ this.nextPage.bind(this)} /> : null }
                
//                 {this.state.modalVisible && <Modal modalToggle={ this.modalToggle } image={ modalImage } tags={ modalTags }/> }
//             </div>
//         )
//      }
// };
