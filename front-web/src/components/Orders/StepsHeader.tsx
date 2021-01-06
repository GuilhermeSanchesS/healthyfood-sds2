function StepsHeader(){
    return (
       <header className="orders-staps-container">
           <div className="orders-staps-content">
               <h1 className="steps-title">
                   SIGA AS <br /> ETAPAS
               </h1>
               <ul className="steps-items">
                   <li>
                       <span className="steps-number">1</span>
                        Selecione os produtos e localização.
                    </li>
                   <li>
                       <span className="steps-number">2</span>
                       Depois clique em <strong>"ENIVIAR PEDIDO"</strong>
                    </li>
               </ul>
           </div>
       </header>
    )
}

export default StepsHeader;