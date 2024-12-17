import React,{Component} from "react"
export default class Footer extends Component{
   render(){
    return(
        <>
    <div id="foot_container">
        <div className="image">
            <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format" alt="" />
        </div>
        <div className="items">
            <h1>Save $$$ <br></br>with offers on demand</h1>
            <div className="svg">
                <svg viewBox="0 0 190 56" title="IOS Download app button" aria-label="IOS Download app button" className="r-1mwlp6a r-13qz1uu"><path fill="#000" d="M188.944 49.542a5.403 5.403 0 0 1-5.41 5.402H6.474c-2.991 0-5.418-2.418-5.418-5.402V6.465a5.417 5.417 0 0 1 5.417-5.408h177.06a5.409 5.409 0 0 1 5.41 5.408l.001 43.077Z"></path><path fill="#A6A6A6" d="M182.963 1.122c3.258 0 5.909 2.637 5.909 5.878v42c0 3.241-2.651 5.878-5.909 5.878H7.037c-3.258 0-5.91-2.637-5.91-5.878V7c0-3.241 2.652-5.878 5.91-5.878h175.926Zm0-1.122H7.037C3.168 0 0 3.152 0 7v42c0 3.848 3.168 7 7.037 7h175.926c3.869 0 7.037-3.152 7.037-7V7c0-3.848-3.168-7-7.037-7Z"></path><path fill="#fff" d="M42.402 27.698c-.04-4.513 3.715-6.708 3.886-6.81-2.126-3.084-5.422-3.506-6.58-3.54-2.77-.29-5.454 1.649-6.865 1.649-1.438 0-3.61-1.62-5.95-1.573-3.012.047-5.83 1.781-7.375 4.475-3.19 5.492-.81 13.563 2.245 18.002 1.528 2.174 3.314 4.602 5.652 4.517 2.287-.094 3.141-1.45 5.901-1.45 2.735 0 3.537 1.45 5.921 1.395 2.455-.04 4-2.184 5.475-4.378 1.766-2.492 2.475-4.946 2.504-5.072-.058-.02-4.767-1.807-4.814-7.215ZM37.899 14.428c1.23-1.53 2.071-3.612 1.838-5.724-1.78.078-4.007 1.225-5.29 2.721-1.134 1.32-2.147 3.48-1.885 5.514 2 .148 4.053-1.004 5.337-2.51Z"></path><path fill="#fff" fillRule="evenodd" d="M122.243 42.75c1.111-.995 1.664-2.284 1.664-3.87 0-1.287-.379-2.367-1.137-3.229-.762-.865-1.945-1.62-3.557-2.265-1.317-.517-2.225-.996-2.725-1.438-.574-.479-.86-1.088-.86-1.824 0-.665.251-1.227.751-1.687.591-.515 1.415-.774 2.471-.774 1.336 0 2.529.285 3.585.856l.75-2.433c-1.13-.59-2.546-.885-4.251-.885-1.911 0-3.439.489-4.585 1.468-1.15.977-1.724 2.233-1.724 3.764 0 2.344 1.638 4.126 4.917 5.343 1.205.443 2.068.924 2.584 1.44.52.517.779 1.154.779 1.91 0 .848-.314 1.529-.943 2.035-.632.507-1.512.762-2.642.762a8.26 8.26 0 0 1-4.338-1.19l-.695 2.488c1.223.774 2.839 1.16 4.854 1.16 2.183 0 3.882-.543 5.102-1.63Zm-49.939 1.356H75.5l-6.058-18.632h-3.724l-6.03 18.632H62.8l1.668-5.473h6.085l1.751 5.473Zm-3.862-12.634 1.584 4.865h-5.03l1.556-4.865c.408-1.547.705-2.717.89-3.51h.056c.463 1.843.777 3.013.944 3.51ZM89.144 42.64c1.241-1.326 1.862-3.132 1.862-5.417 0-2.045-.532-3.694-1.6-4.949-1.063-1.253-2.393-1.879-3.986-1.879-2.038 0-3.557.801-4.557 2.405h-.057l-.167-2.129h-2.64c.074 1.512.112 2.986.112 4.423V49.58h3v-7.078h.057c.778 1.272 2.056 1.907 3.835 1.907 1.648 0 3.029-.59 4.14-1.77Zm-2.085-8.542c.594.849.89 1.927.89 3.234 0 1.42-.315 2.562-.946 3.429-.629.865-1.509 1.3-2.639 1.3-.963 0-1.745-.337-2.347-1.01-.603-.674-.904-1.498-.904-2.476v-2.24c0-.238.046-.54.14-.91.184-.792.578-1.432 1.18-1.922.601-.486 1.274-.732 2.014-.732 1.092 0 1.964.443 2.612 1.327Zm19.48 3.125c0 2.285-.62 4.09-1.863 5.417-1.11 1.18-2.491 1.77-4.139 1.77-1.78 0-3.057-.636-3.834-1.907h-.056v7.077h-3V35.094c0-1.437-.039-2.91-.112-4.423h2.639l.167 2.13h.057c.999-1.605 2.517-2.406 4.557-2.406 1.592 0 2.922.626 3.988 1.88 1.063 1.254 1.596 2.903 1.596 4.948Zm-3.057.11c0-1.308-.296-2.386-.89-3.235-.649-.884-1.518-1.327-2.611-1.327-.742 0-1.413.246-2.016.732-.602.49-.995 1.13-1.179 1.922-.091.37-.14.672-.14.91v2.24c0 .978.302 1.802.901 2.476.603.672 1.385 1.01 2.35 1.01 1.131 0 2.011-.435 2.64-1.3.63-.867.945-2.01.945-3.429Zm30.346-4.422h-3.308v6.523c0 1.659.583 2.488 1.751 2.488.536 0 .981-.046 1.333-.139l.083 2.267c-.591.22-1.37.33-2.334.33-1.185 0-2.111-.36-2.779-1.078-.666-.72-1.001-1.926-1.001-3.622V32.91h-1.97v-2.24h1.97v-2.46l2.947-.885v3.345h3.308v2.242Zm13.143 9.453c1.185-1.326 1.779-3.021 1.779-5.086 0-2.01-.574-3.649-1.725-4.919-1.204-1.309-2.798-1.962-4.78-1.962-2.056 0-3.691.663-4.903 1.99-1.215 1.326-1.82 3.032-1.82 5.113 0 1.99.588 3.64 1.765 4.948 1.177 1.307 2.754 1.961 4.736 1.961 2.056 0 3.706-.68 4.948-2.045Zm-2.139-8.177c.539.886.805 1.948.805 3.187 0 1.238-.279 2.312-.832 3.215-.648 1.089-1.548 1.635-2.693 1.635-1.17 0-2.076-.535-2.725-1.607-.539-.885-.805-1.948-.805-3.187 0-1.276.266-2.356.805-3.243.629-1.072 1.545-1.608 2.751-1.608 1.166 0 2.065.535 2.694 1.608Zm13.672-.89a5.241 5.241 0 0 0-.946-.083c-1.056 0-1.872.396-2.446 1.19-.5.7-.75 1.584-.75 2.652v7.05h-3l.029-9.204c0-1.549-.038-2.958-.113-4.23h2.614l.109 2.57h.083c.317-.883.817-1.594 1.501-2.127.668-.48 1.39-.72 2.169-.72.277 0 .527.02.75.055v2.846Zm13.309 4.81c.075-.368.11-.82.11-1.354 0-1.676-.398-3.087-1.19-4.228-1.001-1.436-2.475-2.155-4.421-2.155-1.982 0-3.557.719-4.722 2.155-1.113 1.345-1.669 3.032-1.669 5.058 0 2.064.598 3.709 1.792 4.934 1.196 1.225 2.84 1.838 4.934 1.838 1.741 0 3.25-.276 4.527-.83l-.47-2.072c-1.093.424-2.309.635-3.642.635-1.205 0-2.186-.313-2.944-.939-.836-.7-1.271-1.715-1.306-3.042h9.001Zm-3.334-4.423c.407.646.603 1.41.583 2.295v-.002h-6.25c.091-.901.388-1.675.888-2.32.609-.813 1.407-1.217 2.388-1.217 1.074 0 1.872.414 2.391 1.244ZM98.576 18.806h1.474V9.178h-1.474v9.628Zm-29.543-4.793c0 1.648-.496 2.888-1.489 3.721-.919.769-2.225 1.154-3.916 1.154-.84 0-1.557-.037-2.158-.11V9.776c.784-.126 1.628-.19 2.54-.19 1.612 0 2.826.348 3.645 1.045.918.789 1.378 1.916 1.378 3.383Zm-1.555.04c0-1.068-.284-1.887-.853-2.458-.568-.57-1.399-.855-2.492-.855-.465 0-.86.03-1.188.095v6.845c.181.027.514.04.996.04 1.13 0 2-.312 2.614-.936.613-.625.923-1.535.923-2.73Zm9.801 1.399c0 1.015-.291 1.846-.874 2.499-.61.67-1.42 1.005-2.43 1.005-.974 0-1.75-.32-2.328-.965-.577-.642-.866-1.453-.866-2.43 0-1.022.297-1.86.894-2.512.597-.65 1.399-.977 2.41-.977.973 0 1.756.32 2.349.963.562.625.845 1.431.845 2.417Zm-1.53.047c0-.609-.132-1.131-.395-1.566-.31-.527-.75-.79-1.323-.79-.593 0-1.043.263-1.353.79-.264.435-.395.966-.395 1.593 0 .609.132 1.131.395 1.566.32.527.765.79 1.339.79.563 0 1.005-.267 1.323-.804.273-.443.41-.97.41-1.579Zm12.587-3.29v-.002.001Zm-1.448 0h1.447l-2.075 6.597h-1.351l-.86-2.865a21.362 21.362 0 0 1-.534-2.133h-.026a15.546 15.546 0 0 1-.534 2.133l-.913 2.865h-1.367l-1.952-6.6h1.516l.75 3.138c.182.742.331 1.45.45 2.118h.027c.11-.551.292-1.254.548-2.104l.941-3.15h1.202l.903 3.083c.218.752.395 1.476.531 2.173h.041c.1-.68.25-1.403.45-2.173l.806-3.083Zm9.094 6.597h-1.475v-3.78c0-1.165-.444-1.747-1.337-1.747-.437 0-.79.16-1.065.48-.272.32-.41.699-.41 1.131v3.915H90.22v-4.713c0-.58-.018-1.208-.053-1.888h1.296l.07 1.032h.04c.172-.32.428-.586.764-.797.4-.246.847-.37 1.337-.37.62 0 1.135.198 1.544.597.51.489.764 1.218.764 2.187v3.953Zm12.751-3.354c0 1.015-.291 1.846-.874 2.499-.61.67-1.421 1.005-2.43 1.005-.975 0-1.751-.32-2.328-.965-.577-.642-.866-1.453-.866-2.43 0-1.022.297-1.86.894-2.512.597-.65 1.399-.977 2.408-.977.976 0 1.757.32 2.351.963.563.625.845 1.431.845 2.417Zm-1.531.047c0-.609-.132-1.131-.395-1.566-.308-.527-.75-.79-1.322-.79-.594 0-1.044.263-1.352.79-.265.435-.396.966-.396 1.593 0 .609.132 1.131.396 1.566.319.527.764.79 1.338.79.563 0 1.004-.267 1.322-.804.274-.443.409-.97.409-1.579Zm7.346 3.307h1.324c-.063-.39-.096-.914-.096-1.574v-2.43c0-1.82-.87-2.73-2.604-2.73-.897 0-1.659.19-2.275.57l.299.963c.499-.325 1.076-.489 1.73-.489.919 0 1.378.434 1.378 1.304v.123c-1.229-.01-2.183.199-2.861.624-.68.426-1.018 1.04-1.018 1.847 0 .533.173.983.52 1.344.381.398.888.598 1.514.598.839 0 1.485-.304 1.938-.91h.041l.11.76Zm-.207-3.286v1.018a1.253 1.253 0 0 1-.535 1.039 1.496 1.496 0 0 1-.902.305c-.289 0-.531-.085-.721-.258-.19-.172-.283-.43-.283-.774 0-.914.814-1.358 2.441-1.33Zm9.912 3.286h-1.309l-.069-1.06h-.041c-.418.807-1.13 1.21-2.131 1.21-.799 0-1.465-.312-1.992-.936-.528-.625-.791-1.436-.791-2.43 0-1.07.285-1.934.86-2.595.555-.616 1.237-.924 2.047-.924.891 0 1.515.298 1.869.896h.029V9.178h1.476v7.85c0 .643.017 1.235.052 1.778Zm-1.528-2.783v-1.1c0-.19-.015-.345-.041-.462a1.668 1.668 0 0 0-.534-.89 1.453 1.453 0 0 0-.986-.36c-.551 0-.981.218-1.298.653-.314.436-.473.991-.473 1.67 0 .653.151 1.182.453 1.59.32.434.751.65 1.29.65.484 0 .871-.18 1.165-.543.284-.334.424-.738.424-1.208Zm13.269 1.928c.582-.653.874-1.484.874-2.5 0-.985-.283-1.791-.846-2.416-.591-.642-1.375-.963-2.348-.963-1.012 0-1.814.326-2.411.977-.596.651-.893 1.49-.893 2.512 0 .977.288 1.788.865 2.43.58.644 1.355.965 2.328.965 1.012 0 1.82-.335 2.431-1.005Zm-1.05-4.018c.263.435.395.957.395 1.566 0 .61-.138 1.136-.409 1.58-.319.536-.762.803-1.325.803-.574 0-1.019-.263-1.338-.79-.263-.435-.396-.957-.396-1.566 0-.627.131-1.158.396-1.593.311-.527.761-.79 1.352-.79.574 0 1.014.263 1.325.79Zm9.854 4.873h-1.473v-3.78c0-1.165-.445-1.747-1.339-1.747-.437 0-.791.16-1.064.48-.273.32-.409.699-.409 1.131v3.915h-1.477v-4.713c0-.58-.017-1.208-.052-1.888h1.295l.069 1.032h.041c.173-.32.429-.586.764-.797a2.507 2.507 0 0 1 1.339-.37c.617 0 1.132.198 1.542.597.511.489.764 1.218.764 2.187v3.953Zm8.303-5.5h1.622v-1.1h-1.624v-1.643l-1.445.434v1.21h-.97v1.099h.97v3.328c0 .833.163 1.426.492 1.779.328.353.782.53 1.364.53.472 0 .854-.055 1.146-.165l-.038-1.113a2.611 2.611 0 0 1-.657.069c-.572 0-.86-.407-.86-1.222v-3.206Zm9.432 5.5h-1.476v-3.752c0-1.183-.445-1.775-1.336-1.775-.684 0-1.151.343-1.407 1.03-.044.143-.069.32-.069.527v3.969h-1.474V9.178h1.474v3.978h.028c.464-.724 1.13-1.085 1.993-1.085.611 0 1.116.199 1.517.598.5.497.75 1.236.75 2.213v3.924Zm8-2.947a3.54 3.54 0 0 0 .055-.665c0-.823-.196-1.516-.592-2.076-.489-.705-1.214-1.058-2.168-1.058-.976 0-1.748.353-2.32 1.058-.547.661-.819 1.49-.819 2.485 0 1.014.291 1.822.88 2.424.585.602 1.395.903 2.422.903.857 0 1.597-.136 2.226-.408l-.23-1.019a4.914 4.914 0 0 1-1.789.312c-.591 0-1.074-.154-1.448-.462-.41-.344-.621-.841-.641-1.494h4.424Zm-1.639-2.171c.2.316.297.692.286 1.127h-3.071c.048-.444.193-.823.438-1.141.3-.399.692-.598 1.174-.598.527 0 .917.205 1.173.612Z" clipRule="evenodd"></path></svg>
            <svg fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" clipRule="evenodd" viewBox="0 0 190 56" title="Android Download app button" aria-label="Android Download app button" className="r-1mwlp6a r-13qz1uu"><g clipPath="url(#a)"><path fill="#000" fillRule="evenodd" d="M182.96 56H7.04C3.16 56 0 52.844 0 49V7c0-3.858 3.16-7 7.04-7h175.92c3.877 0 7.04 3.142 7.04 7v42c0 3.844-3.163 7-7.04 7Z" clipRule="evenodd"></path><path fill="#A6A6A6" fillRule="evenodd" d="M182.96 1.12c3.255 0 5.918 2.644 5.918 5.88v42c0 3.236-2.646 5.88-5.918 5.88H7.04c-3.255 0-5.918-2.644-5.918-5.88V7c0-3.236 2.646-5.88 5.918-5.88h175.92Zm0-1.12H7.04C3.16 0 0 3.156 0 7v42c0 3.858 3.16 7 7.04 7h175.92c3.877 0 7.04-3.142 7.04-7V7c0-3.844-3.163-7-7.04-7Z" clipRule="evenodd"></path><path fill="#fff" d="M100.092 18.525c-1.268 0-2.338-.444-3.184-1.316a4.48 4.48 0 0 1-1.286-3.212c0-1.275.433-2.353 1.286-3.209.843-.873 1.912-1.316 3.181-1.316 1.255 0 2.324.443 3.184 1.316.853.883 1.286 1.962 1.286 3.209-.013 1.277-.447 2.356-1.286 3.208-.842.88-1.912 1.32-3.181 1.32Zm-37.752 0c-1.241 0-2.318-.436-3.199-1.299-.874-.859-1.317-1.944-1.317-3.226 0-1.281.443-2.367 1.317-3.226.864-.862 1.94-1.298 3.199-1.298.615 0 1.212.122 1.786.37.562.24 1.02.569 1.36.97l.083.101-.947.93-.098-.116c-.535-.636-1.251-.946-2.199-.946-.845 0-1.583.3-2.191.893-.612.597-.923 1.38-.923 2.326 0 .946.311 1.728.923 2.325a3.04 3.04 0 0 0 2.191.894c.902 0 1.66-.3 2.251-.894.35-.35.567-.838.644-1.456h-3.038v-1.306h4.341l.018.119c.031.22.063.447.063.656 0 1.205-.364 2.179-1.084 2.898-.818.852-1.887 1.285-3.18 1.285Zm50.196-.185h-1.339l-4.1-6.553.035 1.18v5.37h-1.339V9.66h1.528l.042.066 3.855 6.172-.035-1.176V9.66h1.353v8.679Zm-22.503 0h-1.356v-7.374h-2.353V9.661h6.058v1.305h-2.353v7.374h.004Zm-4.813 0h-1.353V9.66h1.353v8.68Zm-7.602 0h-1.353v-7.374h-2.353V9.661h6.058v1.305h-2.352v7.374Zm-4.562-.014H67.87V9.66h5.187v1.305h-3.83v2.381h3.456v1.292h-3.457v2.381h3.831v1.306Zm24.845-2.015a2.995 2.995 0 0 0 2.191.908c.878 0 1.594-.297 2.192-.908.594-.593.895-1.372.895-2.31 0-.94-.301-1.722-.891-2.312a3.002 3.002 0 0 0-2.192-.908c-.877 0-1.594.297-2.188.908-.594.594-.895 1.372-.895 2.311 0 .94.297 1.721.888 2.311Z"></path><path fill="#fff" fillRule="evenodd" d="M95.496 30.458c-3.303 0-5.98 2.503-5.98 5.956 0 3.421 2.695 5.956 5.98 5.956 3.303 0 5.981-2.52 5.981-5.956 0-3.453-2.678-5.956-5.98-5.956Zm0 9.552c-1.807 0-3.362-1.494-3.362-3.61 0-2.147 1.559-3.61 3.362-3.61 1.807 0 3.363 1.463 3.363 3.61.003 2.13-1.556 3.61-3.363 3.61Zm-13.048-9.552c-3.303 0-5.98 2.503-5.98 5.956 0 3.421 2.694 5.956 5.98 5.956 3.303 0 5.98-2.52 5.98-5.956 0-3.453-2.68-5.956-5.98-5.956Zm0 9.552c-1.807 0-3.362-1.494-3.362-3.61 0-2.147 1.558-3.61 3.362-3.61 1.807 0 3.363 1.463 3.363 3.61 0 2.13-1.556 3.61-3.363 3.61Zm-15.526-7.733v2.52h6.057c-.185 1.414-.653 2.458-1.37 3.174-.888.887-2.258 1.85-4.673 1.85-3.723 0-6.635-3.002-6.635-6.72s2.912-6.721 6.635-6.721c2.01 0 3.474.793 4.561 1.805l1.79-1.787c-1.51-1.446-3.52-2.553-6.337-2.553-5.107 0-9.392 4.155-9.392 9.242 0 5.1 4.282 9.241 9.392 9.241 2.757 0 4.827-.9 6.463-2.597 1.667-1.666 2.195-4.015 2.195-5.911 0-.59-.046-1.12-.14-1.571h-8.55c.004-.004.004.028.004.028Zm63.507 1.962c-.5-1.337-2.01-3.795-5.107-3.795-3.069 0-5.62 2.412-5.62 5.956 0 3.345 2.523 5.956 5.917 5.956 2.727 0 4.313-1.665 4.967-2.643l-2.024-1.354c-.671.995-1.604 1.647-2.929 1.647-1.339 0-2.275-.607-2.898-1.805l7.973-3.299c0 .004-.279-.663-.279-.663Zm-8.13 1.99c-.063-2.3 1.789-3.47 3.114-3.47 1.045 0 1.915.513 2.212 1.26l-5.326 2.21Zm-6.477 5.77h2.618V24.503h-2.618V42Zm-4.3-10.218h-.094c-.591-.702-1.713-1.337-3.146-1.337-2.974 0-5.715 2.615-5.715 5.973 0 3.345 2.727 5.929 5.715 5.929 1.416 0 2.555-.64 3.146-1.355h.094v.855c0 2.273-1.216 3.499-3.177 3.499-1.604 0-2.6-1.152-3.006-2.116l-2.275.95c.653 1.57 2.397 3.515 5.278 3.515 3.069 0 5.669-1.805 5.669-6.207V30.8h-2.475v.981h-.014Zm-3.006 8.229c-1.807 0-3.317-1.508-3.317-3.593 0-2.101 1.51-3.623 3.317-3.623 1.79 0 3.178 1.54 3.178 3.623.017 2.085-1.384 3.593-3.178 3.593Zm34.171-15.508h-6.26V42h2.618v-6.627h3.645c2.898 0 5.747-2.098 5.747-5.428 0-3.331-2.838-5.443-5.75-5.443Zm.077 8.428h-3.723v-6.005h3.723c1.961 0 3.069 1.616 3.069 3.002 0 1.372-1.122 3.003-3.069 3.003Zm16.166-2.504c-1.902 0-3.863.842-4.673 2.675l2.32.963c.5-.963 1.416-1.291 2.384-1.291 1.356 0 2.727.81 2.758 2.255v.185c-.468-.265-1.496-.67-2.726-.67-2.506 0-5.048 1.368-5.048 3.934 0 2.35 2.056 3.858 4.345 3.858 1.758 0 2.727-.792 3.331-1.71h.095v1.354h2.523v-6.703c0-3.121-2.321-4.85-5.309-4.85Zm-.329 9.584c-.856 0-2.055-.419-2.055-1.494 0-1.355 1.496-1.868 2.772-1.868 1.153 0 1.699.248 2.384.59a3.15 3.15 0 0 1-3.101 2.772Zm14.845-9.21-3.006 7.59h-.094l-3.115-7.59h-2.817l4.673 10.61-2.663 5.897h2.726l7.19-16.507h-2.894ZM149.88 42h2.618V24.502h-2.618V42Z" clipRule="evenodd"></path><path fill="url(#b)" fillRule="evenodd" d="M14.625 10.547c-.406.437-.64 1.104-.64 1.976v30.958c0 .872.234 1.54.654 1.958l.108.094L32.112 28.19V27.8l-17.38-17.348-.107.094Z" clipRule="evenodd"></path><path fill="url(#c)" fillRule="evenodd" d="m37.89 33.988-5.792-5.785v-.405l5.791-5.785.126.076 6.851 3.89c1.961 1.103 1.961 2.925 0 4.043l-6.85 3.889-.127.077Z" clipRule="evenodd"></path><path fill="url(#d)" fillRule="evenodd" d="M38.015 33.91 32.098 28 14.624 45.453c.64.684 1.713.761 2.912.094l20.48-11.636Z" clipRule="evenodd"></path><path fill="url(#e)" fillRule="evenodd" d="M38.015 22.09 17.536 10.47c-1.199-.684-2.275-.59-2.912.095L32.099 28l5.917-5.91Z" clipRule="evenodd"></path><path fill="#000" fillRule="evenodd" d="M37.89 33.785 17.55 45.327c-1.136.653-2.15.607-2.803.014l-.109.108.109.094c.653.59 1.667.64 2.803-.014L38.03 33.91l-.14-.125Z" clipRule="evenodd" opacity="0.2"></path><path fill="#000" fillRule="evenodd" d="m44.866 29.819-6.994 3.966.126.126 6.85-3.89c.983-.558 1.465-1.291 1.465-2.021-.06.67-.559 1.306-1.447 1.819Z" clipRule="evenodd" opacity="0.12"></path><path fill="#fff" fillRule="evenodd" d="m17.536 10.673 27.33 15.508c.888.5 1.388 1.152 1.465 1.82 0-.73-.483-1.463-1.465-2.022L17.536 10.47c-1.96-1.121-3.551-.185-3.551 2.053v.202c0-2.241 1.59-3.16 3.551-2.053Z" clipRule="evenodd" opacity="0.25"></path></g><defs><linearGradient id="b" x1="30.554" x2="2.743" y1="12.19" y2="19.608" gradientUnits="userSpaceOnUse"><stop stopColor="#00A0FF"></stop><stop offset="0.007" stopColor="#00A1FF"></stop><stop offset="0.26" stopColor="#00BEFF"></stop><stop offset="0.512" stopColor="#00D2FF"></stop><stop offset="0.76" stopColor="#00DFFF"></stop><stop offset="1" stopColor="#00E3FF"></stop></linearGradient><linearGradient id="c" x1="47.423" x2="13.508" y1="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE000"></stop><stop offset="0.409" stopColor="#FFBD00"></stop><stop offset="0.775" stopColor="orange"></stop><stop offset="1" stopColor="#FF9C00"></stop></linearGradient><linearGradient id="d" x1="34.798" x2="12.506" y1="31.216" y2="68.779" gradientUnits="userSpaceOnUse"><stop stopColor="#FF3A44"></stop><stop offset="1" stopColor="#C31162"></stop></linearGradient><linearGradient id="e" x1="10.225" x2="20.17" y1="0.25" y2="17.026" gradientUnits="userSpaceOnUse"><stop stopColor="#32A071"></stop><stop offset="0.069" stopColor="#2DA771"></stop><stop offset="0.476" stopColor="#15CF74"></stop><stop offset="0.801" stopColor="#06E775"></stop><stop offset="1" stopColor="#00F076"></stop></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h190v56H0z"></path></clipPath></defs></svg>
            </div>
            <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div>
    </div>
    <div className="copyright">
            TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.
            <a href="">| Do Not Sell Or Share My Personal Information</a>
    </div>
    <div className="footer_icons">
        <figure>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAACXBIWXMAAB7CAAAewgFu0HU+AAAB5ElEQVR4nO2ZO0sDQRCAt7AQRNHMmFh53kx8NNpZWykWiTsRbBS0E/0VamdrIaKdir/A0v+gIEgstbfSIJEUyirBB0o2udztBXdgqmPnPma/3b2HUv89FkezJCEWTBbHcqFKaywGMKEZzoXx9WtqhnNzTaUpFjizKgSVn7DyCf0sjOuuOdVaEHRrhr2/QOVnEp7MTuV6nMCaaRaGa2tYrncby5qyk6lSoDE0JKNI0wqwQ0VaVUBcKBJVAUlKkbYrwDEqEpcCEocicSsg7VIkcQU4giKuFJBWFJF8Zk4TPLmGk7+gCZ5KYWb2o7Mj/YEQPrqGkoZ6QMU8uirNeOAchm2hcV8J471zELZUg/FOCWGtgzpcU6kAYfv0wOI7jF6JV7/o2O8S6PdhSfTgIKhqwlNh3P0ttblGUE3HSUdQLYUw3ehtphTCdDugIwOb7tm+KwrjmXtghh1bYM2wkwbg7SaAtz2w+A5/hldC/KL7Hl4J8UrEoIQmfOmYk46gar6tlTsHGG8iF0kYeEvN5zN9wngbYZo2bIGFYLP1xmB5YRx63wsVaGBYCK6aLkL4UAyzOVvgpWBwyIxpoSmXhvFbsZkZ1VUKYcX8VxDGC4s8LPJg3ha2HmaMJjiyugfhsSZYNmz1Am+atZQReCld9wAAAABJRU5ErkJggg==" alt="" />
            <figcaption>Home</figcaption>
        </figure>
        <figure>
            <img src="https://www.bk.com/static/media/4f5f9366a38571baec86febd55f0769bc348f9d7-22x22.928445c72424e3a06f12.png" alt="" />
            <figcaption>Menu</figcaption>
        </figure>
        <figure>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABuvAAAbrwFeGpEcAAACjklEQVR4nNXaO28UMRAAYPMQP+BmktTrSRpKJNoEJCSq3EyE0sE/oAhCIrxEEBI1He+XQoEA0SKQaOBvUFDRUUBxDUKAvJeE6Hbt9d7aXp+lrc573m/HM+vzrVI7jQlECD4LwUgI/wY5NP5kgndMcEKlaKLhdrCLrz/+MOHVqAguIxEVsT9CW9EgUk6nRJAx5kYsyCgpJBZGagYK9NUHmPBeMozEg6TFiAdktZhfkEU4yxo3hku43Ob7t5Q6KATPHJjrSSBMc6dZ4/f9nzPh2/Wj6kgbDBM+d+TNtaiQ1WJ+YRLx/4BbbcZpwnR+zogDwgTn7FMCvrQdqzEyusM0c0GGi3jBcQd/TDPeulKHROO2fZoNroSHLOGyY15/nGpAH4yGy0EhppnErkRD4681wmPTQnYxrPGFNeIaNoNCTHUyiW1ywkwnE4muiBaYS8EgsVvTNGPfatY3JBhGMoAEwUgmEJ+cEVdpzgnSCZMbZGpMjhAvzORDs66TWROpDNrKijrMGl7ZMGYJtdfZbNlUKwQ8mRWM0OB82ZE1fqgvd7OBYcLfawUcV8NicMrsO1nm4ePMMK8tN/1l2cn8QnMk1aOcMKLhTfU64eteJya4OQsYJrhYvT78NtnJimEND82uSG8CVebzhuVGv692dkWG8EFfGLYhxjki9SdlhmEnAu82nAybjpxJVs3YgRCCp17X0YCJXgA4BKJvDIdE9IXhGAgfjCnNoTAcE+GL6VrNOAUiNiYpIhamF4RXAWjx0OwVEQqTBaIrJiuEJ+b+JCZLRFtM1gi/VTPcaViKZ7NH4BOZvCPRDZMpoh0mc8RuM38F2LaazBsRM4FQO21IcNK8fDbe0YSRaPjExdyZ0AP9AyLFp7XcRqWkAAAAAElFTkSuQmCC" alt="" />
            <figcaption>Offers</figcaption>
        </figure>
        <figure>
            <img src="https://www.bk.com/static/media/daf5c681f2f8aafb1000074e9fa60c327055d59d-22x15.8999aa31fe345e72cf99.png" alt=""  className="reward"/>
            <figcaption>Rewards</figcaption>
        </figure>
    </div>
    </>
    )
   }
}