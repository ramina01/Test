import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { BsShare } from 'react-icons/bs';



const App = () => {
  const [isReadingMode, setIsReadingMode] = useState(false);

  const toggleReadingMode = () => {
    setIsReadingMode(!isReadingMode);
  };
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2);
  };

  const resetFontSize = () => {
    setFontSize(16);
  };


  const [buttonText, setButtonText] = useState('Share');

  const handleCopyUrl = () => {
    const url = window.location.href;
    console.log(url);
    navigator.clipboard.writeText(url);
    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Share');
    }, 2000); 
  };





  return (
    <div style={{ backgroundColor: 'white', padding: '20px', marginLeft: '25%', marginRight: '25%'  }}>
      
      {!isReadingMode && (
        <div>
          <h4 style={{ textAlign: 'left', paddingTop:'100px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</h4>
          <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'left', marginTop: '20px' }}>
            <div style={{ backgroundColor: '#b03337', height: '22px', display: 'flex', alignItems: 'center', padding: '5px 10px 5px 10px', color:'white' }}>Lorem</div>
            <div style={{ backgroundColor: '#b03337', height: '22px', display: 'flex', alignItems: 'center', padding: '5px 10px 5px 10px',marginInline:'10px', color:'white'  }}>Lorem Lorem</div>
            <div style={{ backgroundColor: '#b03337', height: '22px', display: 'flex', alignItems: 'center', padding: '5px 10px 5px 10px', color:'white'  }}>Loremmm</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <img src="/nothing.png" alt="nothing" style={{ width: '100%' }} />
</div>


<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>

<div style={{ display: 'flex', width:'40%',alignItems:'center',whiteSpace: 'nowrap' }}>
  <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} /> 

  2022-06-18 23:17
</div>

<div style={{ display: 'flex', justifyContent:'space-between'}}>

<button onClick={handleCopyUrl} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', border: 'none', borderRadius: '28px', fontSize: '12px', paddingInline: '10px' }}>
      <BsShare style={{ marginRight: '10px' }} />
      {buttonText}
    </button>
 

  <div class="btn-group" style={{ display: 'flex', justifyContent:'flex-end', height:'30px' }}>

    <button onClick={toggleReadingMode} style={{ width: '64%',display: 'flex', alignItems: 'center', fontSize:'10px',paddingRight:'30px',paddingLeft:'15px' ,border:'none', borderTopLeftRadius:'28px' ,borderBottomLeftRadius:'28px',whiteSpace: 'nowrap'}}>
     <FontAwesomeIcon icon={faAlignLeft} className="border border-dark" style={{padding:'1px',marginRight:'5px' }} />
      Enable Reading Mode</button>
      <div style={{width:'0.5px',height:'60%',backgroundColor:'#ccc', marginTop:'5px', marginBottom:'5px'}}></div>
    <button onClick={decreaseFontSize}  style={{ width: '13%',fontSize:'14px',border:'none'}}> A- </button>
    <button onClick={resetFontSize} style={{ width: '13%' ,fontSize:'14px',border:'none' }}> A </button>
    <button  onClick={increaseFontSize} style={{ width: '13%' ,fontSize:'14px',border:'none', borderTopRightRadius:'28px' ,borderBottomRightRadius:'28px',paddingRight:'30px' }}> A+ </button>
  
  </div>
 
</div>

</div>

          <p style={{ fontSize: `${fontSize}px` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scraLorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore Ipsum.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p> <p style={{ fontSize: `${fontSize}px` }}>n printer took a galley of type and scraLorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore Ipsum.
          </p>
        </div>
      )}
      {isReadingMode && (
        <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>

<div style={{ display: 'flex', width:'40%',alignItems:'center',whiteSpace: 'nowrap' }}>
  <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} /> 

  2022-06-18 23:17
</div>

<div style={{ display: 'flex', justifyContent:'space-between'}}>

<button onClick={handleCopyUrl} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', border: 'none', borderRadius: '28px', fontSize: '12px', paddingInline: '10px' }}>
      <BsShare style={{ marginRight: '10px' }} />
      {buttonText}
    </button>


  <div class="btn-group" style={{ display: 'flex', justifyContent:'flex-end', height:'30px' }}>

    <button onClick={toggleReadingMode} style={{ width: '64%',display: 'flex', alignItems: 'center', fontSize:'10px',paddingRight:'30px',paddingLeft:'15px' ,border:'none', borderTopLeftRadius:'28px' ,borderBottomLeftRadius:'28px',whiteSpace: 'nowrap'}}>
     <FontAwesomeIcon icon={faAlignLeft} className="border border-dark" style={{padding:'1px',marginRight:'5px' }} />
      Disable Reading Mode</button>
    
      <div style={{width:'1px',height:'60%',backgroundColor:'#ccc', marginTop:'5px', marginBottom:'5px'}}></div>
    <button onClick={decreaseFontSize}  style={{ width: '13%',fontSize:'14px',border:'none'}}> 
A- </button>
    <button onClick={resetFontSize} style={{ width: '13%' ,fontSize:'14px',border:'none' }}> A </button>
    <button  onClick={increaseFontSize} style={{ width: '13%' ,fontSize:'14px',border:'none', borderTopRightRadius:'28px' ,borderBottomRightRadius:'28px',paddingRight:'30px' }}> A+ </button>
  
  </div>
 
</div>

</div>
          <h4 style={{ textAlign: 'left', paddingTop:'70px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</h4>
          <p style={{ fontSize: `${fontSize}px` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scraLorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore Ipsum.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
           <p style={{ fontSize: `${fontSize}px` }}>n printer took a galley of type and scraLorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore Ipsum.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
