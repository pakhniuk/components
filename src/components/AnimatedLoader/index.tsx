import { Wrap, LoaderSvg } from "./styled";

export const AnimatedLoader = ({ loading = false }) => {
  return (
    loading && (
      <Wrap>
        <LoaderSvg width="136" height="69" viewBox="0 0 136 69">
          <path d="M12.0522 2.54011C9.14408 5.54349 9.98485 10.0114 13.9332 12.532L16.1601 13.9533L15.7748 17.5646C14.9632 25.179 13.4474 29.0325 11.2637 29.0325C9.44006 29.0325 8.30331 27.2677 6.79812 22.0997L5.58217 17.9249L3.09074 18.0853C1.72034 18.1731 0.370167 18.4662 0.0904716 18.736C-0.526207 19.331 2.14888 26.6582 3.89501 29.1582C7.82928 34.79 14.4931 34.6816 17.8944 28.9312C19.4445 26.3098 19.7147 25.3832 20.5133 19.9514C21.2255 15.1068 20.6571 13.4407 17.6911 11.6797C16.4499 10.9423 15.3103 9.8516 15.1598 9.25558C14.8279 7.94489 16.1056 3.52408 16.8548 3.39079C17.1491 3.33823 17.6692 4.39264 18.0107 5.73367C18.5577 7.8815 18.7953 8.15025 20.0034 7.98986C22.0898 7.71244 22.3561 7.16411 21.6563 4.58336C20.8368 1.56048 19.8517 0.857178 16.4381 0.857178C14.0786 0.857178 13.4468 1.09938 12.0522 2.54011ZM65.1417 9.04915C64.7204 9.70639 65.3523 32.8578 65.8459 34.8572C66.0987 35.8818 66.5233 36.0763 68.5031 36.0763C73.8437 36.0763 79.9414 31.2795 80.4822 26.6533C80.8282 23.6916 79.8173 21.7844 75.5645 17.3744C73.7606 15.5035 71.3579 12.7287 70.225 11.2078C68.1762 8.45584 66.0891 7.56994 65.1417 9.04915ZM24.8031 16.4067C24.6161 20.5197 24.3521 26.0302 24.2173 28.6521C23.9798 33.2593 24.0163 33.436 25.2934 33.9041C26.0954 34.1983 27.4063 34.1783 28.6284 33.8526L30.6419 33.3162V29.3413C30.6419 24.953 30.8587 24.7222 34.9946 24.7054L36.8199 24.6978V29.2931C36.8199 33.7778 36.8547 33.8965 38.2656 34.2384C39.0603 34.4308 40.3549 34.3056 41.1417 33.9594L42.5722 33.3308L42.1617 22.1057C41.9359 15.932 41.5096 10.4406 41.2147 9.90253C40.8154 9.17377 40.1488 8.9657 38.6087 9.08978L36.5391 9.25558L36.7396 15.893L36.9395 22.5305H33.8534H30.7666L30.283 15.893L29.7994 9.25558L27.4715 9.09195L25.1435 8.92778L24.8031 16.4067ZM84.2076 9.89982C80.9961 10.5078 79.0029 16.0372 80.6299 19.8262C83.7577 27.1117 94.4423 24.5174 93.3376 16.7405C92.5575 11.2528 89.4319 8.91098 84.2076 9.89982ZM48.3335 10.8903C47.0979 11.3232 46.024 11.6814 45.9465 11.6857C45.3613 11.7198 46.0218 13.3399 46.9524 14.1521C48.0381 15.0998 48.183 15.1041 49.7067 14.2361C50.5913 13.7317 51.691 13.3193 52.1504 13.3193C52.9305 13.3193 54.7929 16.8597 54.7918 18.3421C54.7918 18.7089 53.1181 20.4526 51.0721 22.2173C47.1709 25.5832 45.8061 27.8052 45.8061 30.7907C45.8061 35.5486 49.6281 36.3532 55.331 32.7971C57.268 31.5894 58.9153 30.6753 58.9923 30.7653C59.0687 30.8552 59.3759 31.6604 59.6735 32.5544C60.2268 34.2129 62.2543 35.0544 63.2899 34.0553C63.5887 33.767 62.5345 29.9866 60.7053 24.7905C57.5315 15.7755 55.9926 12.3256 54.6929 11.314C53.3534 10.271 50.6211 10.0889 48.3335 10.8903ZM95.9924 11.43C95.6128 12.3836 97.8487 29.2909 98.5788 30.995C99.5324 33.2181 101.726 33.0913 106.063 30.5637C108.246 29.2915 110.114 28.4879 110.215 28.7773C110.896 30.7235 112.784 32.8887 113.553 32.6037C114.028 32.4276 114.854 32.2835 115.388 32.2835C117.725 32.2835 118.19 31.1424 119.645 21.8348C120.426 16.8326 121.066 12.383 121.066 11.9463C121.066 11.3823 120.421 11.152 118.844 11.152C116.315 11.152 116.687 10.1967 115.166 20.6016C114.689 23.8623 114.213 26.6127 114.108 26.7145C114.002 26.8158 113.498 26.2816 112.985 25.5274C112.473 24.7731 111.617 24.1619 111.084 24.1695C110.55 24.1771 108.611 25.3892 106.774 26.863C104.937 28.3368 103.363 29.473 103.275 29.3879C103.187 29.3034 102.609 25.8362 101.991 21.6831C100.193 9.61428 100.528 10.6102 98.2761 10.6102C97.0461 10.6102 96.1969 10.9152 95.9924 11.43ZM126.963 11.58C125.286 11.9116 123.478 13.7382 123.121 15.4612C122.607 17.9379 123.803 20.8779 126.419 23.5762C127.767 24.9666 129.112 26.7183 129.408 27.4687C130.189 29.4524 129.199 33.7356 127.446 35.9528C125.085 38.9393 121.755 40.0696 115.449 40.0236C112.515 40.0024 108.85 39.7033 107.306 39.3587C103.117 38.4246 95.9705 34.8859 91.9981 31.7796C90.066 30.2689 88.2806 29.0325 88.0312 29.0325C87.7819 29.0325 86.8956 29.719 86.0627 30.5583L84.5474 32.0841L85.8167 33.2208C89.0983 36.1587 98.4603 41.5894 102.2 42.724C107.537 44.343 119.024 44.4541 124.155 42.9359C130.319 41.1126 134.224 35.7539 134.123 29.259C134.078 26.4544 132.813 24.2947 129.244 20.9277C127.399 19.1879 126.682 18.0842 126.682 16.9821C126.682 14.1911 129.084 14.5861 132.903 18.0062C134.335 19.2887 134.36 19.2914 135.345 18.2408C136.303 17.2189 136.283 17.1073 134.794 15.2239C132.665 12.531 129.53 11.0723 126.963 11.58ZM89.0113 13.1216C89.6515 13.9067 90.1756 15.3366 90.1756 16.2994C90.1756 18.3183 88.3092 20.905 86.8518 20.905C85.2792 20.905 83.8891 18.9902 83.5875 16.4083C83.3421 14.3065 83.4864 13.9013 84.8529 12.8647C86.8585 11.3427 87.5982 11.3882 89.0113 13.1216ZM72.6407 18.9322C78.0032 24.4025 77.6825 29.8447 71.8257 32.7538C70.3817 33.4712 70.2228 32.9716 69.6904 26.0524C69.5067 23.6683 69.2096 20.4379 69.0304 18.8731C68.8361 17.1799 68.9243 16.0285 69.2489 16.0285C69.5483 16.0285 71.0748 17.3354 72.6407 18.9322ZM57.5522 25.3388C58.1156 26.8982 58.0268 27.2135 56.6244 28.6277C54.5885 30.6807 51.5904 32.4476 50.871 32.0185C49.5264 31.2171 50.3734 28.9545 53.0041 26.3217C54.4919 24.8327 55.9836 23.6142 56.3189 23.6142C56.6547 23.6142 57.2096 24.3901 57.5522 25.3388ZM6.25277 39.3885C4.80374 51.8702 4.24491 56.8317 4.24491 57.2208C4.24491 58.1869 6.0854 59.3751 7.5816 59.3751C8.96099 59.3751 9.19519 59.1269 9.50072 57.3432C9.69224 56.226 9.85568 54.0922 9.86354 52.6022C9.88207 49.264 10.0826 48.9795 13.2311 47.8352C18.8194 45.8033 21.6905 42.7771 20.9025 39.7483C20.4156 37.8779 18.5847 37.2667 12.1932 36.8419L6.59143 36.4697L6.25277 39.3885ZM28.3954 37.5598C27.0053 37.6752 25.6517 37.976 25.3872 38.2268C24.9008 38.689 23.4024 53.6582 23.3625 58.4567L23.3406 61.0602L26.0084 60.8949L28.6762 60.7297L29.1131 54.7999C29.3529 51.538 29.6866 48.7378 29.8534 48.5769C30.3622 48.086 32.1286 50.7004 35.2282 56.5305C36.8519 59.5853 38.2987 62.0843 38.4436 62.0843C39.3686 62.0843 42.4363 60.6928 42.4363 60.2729C42.4363 59.9923 40.8193 56.8106 38.8429 53.2026L35.2496 46.642L37.158 44.2656C40.625 39.9488 39.2249 37.0711 33.7461 37.2548C32.1931 37.3068 29.7854 37.4439 28.3954 37.5598ZM76.3598 39.272C75.3315 39.8767 74.2402 41.2096 73.692 42.5317C72.5132 45.3747 72.4722 51.2975 73.6168 53.4328C74.7636 55.572 77.4359 56.8561 79.8375 56.4216C83.3241 55.7903 87.1186 51.084 85.1079 49.8855C84.7917 49.6969 83.3033 50.5357 81.8004 51.7499C78.7164 54.2402 78.1037 54.3973 77.2775 52.9089C76.2424 51.0423 76.6462 50.197 79.5246 48.2014C85.2983 44.2 85.5617 39.5278 80.0661 38.5855C78.6524 38.3433 77.6117 38.5362 76.3598 39.272ZM15.157 39.6367C17.0042 41.4193 15.763 44.5571 12.583 46.143C11.6467 46.6106 10.7504 46.8674 10.5914 46.7141C10.4325 46.5608 10.4813 44.7142 10.7004 42.6103C11.0902 38.864 11.1312 38.7855 12.6863 38.7855C13.5597 38.7855 14.6712 39.1685 15.157 39.6367ZM35.3698 39.1144C36.5138 39.5375 36.5183 41.9785 35.3788 43.5487C34.8952 44.2152 33.5051 45.2495 32.2897 45.8477L30.0803 46.9352V43.429C30.0803 40.6613 30.2875 39.8068 31.0631 39.3706C32.1819 38.7421 34.0623 38.63 35.3698 39.1144ZM45.463 39.8177C42.6458 41.4746 41.117 44.0093 40.8761 47.4196C40.5975 51.3625 41.495 52.6076 44.5604 52.5301C50.3992 52.3822 54.3868 45.9593 51.7241 40.9918C50.4082 38.5362 48.3094 38.1429 45.463 39.8177ZM61.6466 39.6118C55.3579 40.56 55.249 40.6141 55.4584 42.71C55.5556 43.6804 55.8875 44.4639 56.1964 44.4509C56.5053 44.4373 58.981 44.2249 61.6977 43.9784C64.4143 43.7313 66.7637 43.6522 66.9192 43.8018C67.5556 44.4162 62.7625 53.2318 61.0243 54.6427C59.3753 55.9816 58.7744 56.1241 54.7901 56.1241C50.6806 56.1241 50.3004 56.2227 49.2007 57.5713C47.518 59.6352 48.4419 60.1879 53.5736 60.1879C59.2956 60.1879 62.6188 58.629 65.5657 54.5631C67.6202 51.7282 70.6451 44.5511 71.382 40.7642L71.7667 38.7855L69.036 38.8478C67.5348 38.8819 64.2093 39.226 61.6466 39.6118ZM81.1893 41.992C81.1893 42.9798 76.7676 48.2459 76.3093 47.8037C75.7212 47.2364 77.3842 43.1461 78.7311 41.8463C80.2935 40.3394 81.1893 40.3925 81.1893 41.992ZM49.3826 44.5023C49.3242 46.1609 48.889 46.9563 47.2456 48.4095C46.1105 49.413 44.88 50.1385 44.511 50.0209C42.5739 49.4059 44.2807 44.2038 46.8626 42.8519C48.9356 41.7672 49.4674 42.1156 49.3826 44.5023ZM91.0517 44.168C88.4356 46.9568 87.7032 53.6707 89.6021 57.4549C90.9748 60.19 93.2421 61.5424 96.4558 61.5424C99.2876 61.5424 101.046 60.5384 102.295 58.2096C103.439 56.0748 102.977 55.0404 100.879 55.0404C99.5712 55.0404 98.9944 55.4067 98.3193 56.6659C97.6459 57.9219 97.0663 58.2914 95.7695 58.2914C93.3814 58.2914 91.8655 55.7481 91.8627 51.738C91.8599 48.1191 92.8883 46.913 95.9767 46.913C97.6386 46.913 98.0385 46.7103 98.0385 45.8678C98.0385 43.2258 93.0697 42.017 91.0517 44.168ZM120.785 45.8943C118.931 46.1501 114.304 46.3099 110.502 46.2492C102.88 46.1273 102.556 46.2579 102.54 49.4655L102.532 51.2054L107.446 51.3619L112.36 51.5185L112.387 60.1879L112.412 68.8572H114.633H116.853L117.007 60.0925L117.162 51.3278L118.973 50.9908C123.621 50.1266 126.147 49.4774 126.401 49.0814C126.552 48.844 126.52 47.8931 126.329 46.9688C125.949 45.1368 126.085 45.1634 120.785 45.8943Z" />
          <clipPath id="logo">
            <path d="M12.0522 2.54011C9.14408 5.54349 9.98485 10.0114 13.9332 12.532L16.1601 13.9533L15.7748 17.5646C14.9632 25.179 13.4474 29.0325 11.2637 29.0325C9.44006 29.0325 8.30331 27.2677 6.79812 22.0997L5.58217 17.9249L3.09074 18.0853C1.72034 18.1731 0.370167 18.4662 0.0904716 18.736C-0.526207 19.331 2.14888 26.6582 3.89501 29.1582C7.82928 34.79 14.4931 34.6816 17.8944 28.9312C19.4445 26.3098 19.7147 25.3832 20.5133 19.9514C21.2255 15.1068 20.6571 13.4407 17.6911 11.6797C16.4499 10.9423 15.3103 9.8516 15.1598 9.25558C14.8279 7.94489 16.1056 3.52408 16.8548 3.39079C17.1491 3.33823 17.6692 4.39264 18.0107 5.73367C18.5577 7.8815 18.7953 8.15025 20.0034 7.98986C22.0898 7.71244 22.3561 7.16411 21.6563 4.58336C20.8368 1.56048 19.8517 0.857178 16.4381 0.857178C14.0786 0.857178 13.4468 1.09938 12.0522 2.54011ZM65.1417 9.04915C64.7204 9.70639 65.3523 32.8578 65.8459 34.8572C66.0987 35.8818 66.5233 36.0763 68.5031 36.0763C73.8437 36.0763 79.9414 31.2795 80.4822 26.6533C80.8282 23.6916 79.8173 21.7844 75.5645 17.3744C73.7606 15.5035 71.3579 12.7287 70.225 11.2078C68.1762 8.45584 66.0891 7.56994 65.1417 9.04915ZM24.8031 16.4067C24.6161 20.5197 24.3521 26.0302 24.2173 28.6521C23.9798 33.2593 24.0163 33.436 25.2934 33.9041C26.0954 34.1983 27.4063 34.1783 28.6284 33.8526L30.6419 33.3162V29.3413C30.6419 24.953 30.8587 24.7222 34.9946 24.7054L36.8199 24.6978V29.2931C36.8199 33.7778 36.8547 33.8965 38.2656 34.2384C39.0603 34.4308 40.3549 34.3056 41.1417 33.9594L42.5722 33.3308L42.1617 22.1057C41.9359 15.932 41.5096 10.4406 41.2147 9.90253C40.8154 9.17377 40.1488 8.9657 38.6087 9.08978L36.5391 9.25558L36.7396 15.893L36.9395 22.5305H33.8534H30.7666L30.283 15.893L29.7994 9.25558L27.4715 9.09195L25.1435 8.92778L24.8031 16.4067ZM84.2076 9.89982C80.9961 10.5078 79.0029 16.0372 80.6299 19.8262C83.7577 27.1117 94.4423 24.5174 93.3376 16.7405C92.5575 11.2528 89.4319 8.91098 84.2076 9.89982ZM48.3335 10.8903C47.0979 11.3232 46.024 11.6814 45.9465 11.6857C45.3613 11.7198 46.0218 13.3399 46.9524 14.1521C48.0381 15.0998 48.183 15.1041 49.7067 14.2361C50.5913 13.7317 51.691 13.3193 52.1504 13.3193C52.9305 13.3193 54.7929 16.8597 54.7918 18.3421C54.7918 18.7089 53.1181 20.4526 51.0721 22.2173C47.1709 25.5832 45.8061 27.8052 45.8061 30.7907C45.8061 35.5486 49.6281 36.3532 55.331 32.7971C57.268 31.5894 58.9153 30.6753 58.9923 30.7653C59.0687 30.8552 59.3759 31.6604 59.6735 32.5544C60.2268 34.2129 62.2543 35.0544 63.2899 34.0553C63.5887 33.767 62.5345 29.9866 60.7053 24.7905C57.5315 15.7755 55.9926 12.3256 54.6929 11.314C53.3534 10.271 50.6211 10.0889 48.3335 10.8903ZM95.9924 11.43C95.6128 12.3836 97.8487 29.2909 98.5788 30.995C99.5324 33.2181 101.726 33.0913 106.063 30.5637C108.246 29.2915 110.114 28.4879 110.215 28.7773C110.896 30.7235 112.784 32.8887 113.553 32.6037C114.028 32.4276 114.854 32.2835 115.388 32.2835C117.725 32.2835 118.19 31.1424 119.645 21.8348C120.426 16.8326 121.066 12.383 121.066 11.9463C121.066 11.3823 120.421 11.152 118.844 11.152C116.315 11.152 116.687 10.1967 115.166 20.6016C114.689 23.8623 114.213 26.6127 114.108 26.7145C114.002 26.8158 113.498 26.2816 112.985 25.5274C112.473 24.7731 111.617 24.1619 111.084 24.1695C110.55 24.1771 108.611 25.3892 106.774 26.863C104.937 28.3368 103.363 29.473 103.275 29.3879C103.187 29.3034 102.609 25.8362 101.991 21.6831C100.193 9.61428 100.528 10.6102 98.2761 10.6102C97.0461 10.6102 96.1969 10.9152 95.9924 11.43ZM126.963 11.58C125.286 11.9116 123.478 13.7382 123.121 15.4612C122.607 17.9379 123.803 20.8779 126.419 23.5762C127.767 24.9666 129.112 26.7183 129.408 27.4687C130.189 29.4524 129.199 33.7356 127.446 35.9528C125.085 38.9393 121.755 40.0696 115.449 40.0236C112.515 40.0024 108.85 39.7033 107.306 39.3587C103.117 38.4246 95.9705 34.8859 91.9981 31.7796C90.066 30.2689 88.2806 29.0325 88.0312 29.0325C87.7819 29.0325 86.8956 29.719 86.0627 30.5583L84.5474 32.0841L85.8167 33.2208C89.0983 36.1587 98.4603 41.5894 102.2 42.724C107.537 44.343 119.024 44.4541 124.155 42.9359C130.319 41.1126 134.224 35.7539 134.123 29.259C134.078 26.4544 132.813 24.2947 129.244 20.9277C127.399 19.1879 126.682 18.0842 126.682 16.9821C126.682 14.1911 129.084 14.5861 132.903 18.0062C134.335 19.2887 134.36 19.2914 135.345 18.2408C136.303 17.2189 136.283 17.1073 134.794 15.2239C132.665 12.531 129.53 11.0723 126.963 11.58ZM89.0113 13.1216C89.6515 13.9067 90.1756 15.3366 90.1756 16.2994C90.1756 18.3183 88.3092 20.905 86.8518 20.905C85.2792 20.905 83.8891 18.9902 83.5875 16.4083C83.3421 14.3065 83.4864 13.9013 84.8529 12.8647C86.8585 11.3427 87.5982 11.3882 89.0113 13.1216ZM72.6407 18.9322C78.0032 24.4025 77.6825 29.8447 71.8257 32.7538C70.3817 33.4712 70.2228 32.9716 69.6904 26.0524C69.5067 23.6683 69.2096 20.4379 69.0304 18.8731C68.8361 17.1799 68.9243 16.0285 69.2489 16.0285C69.5483 16.0285 71.0748 17.3354 72.6407 18.9322ZM57.5522 25.3388C58.1156 26.8982 58.0268 27.2135 56.6244 28.6277C54.5885 30.6807 51.5904 32.4476 50.871 32.0185C49.5264 31.2171 50.3734 28.9545 53.0041 26.3217C54.4919 24.8327 55.9836 23.6142 56.3189 23.6142C56.6547 23.6142 57.2096 24.3901 57.5522 25.3388ZM6.25277 39.3885C4.80374 51.8702 4.24491 56.8317 4.24491 57.2208C4.24491 58.1869 6.0854 59.3751 7.5816 59.3751C8.96099 59.3751 9.19519 59.1269 9.50072 57.3432C9.69224 56.226 9.85568 54.0922 9.86354 52.6022C9.88207 49.264 10.0826 48.9795 13.2311 47.8352C18.8194 45.8033 21.6905 42.7771 20.9025 39.7483C20.4156 37.8779 18.5847 37.2667 12.1932 36.8419L6.59143 36.4697L6.25277 39.3885ZM28.3954 37.5598C27.0053 37.6752 25.6517 37.976 25.3872 38.2268C24.9008 38.689 23.4024 53.6582 23.3625 58.4567L23.3406 61.0602L26.0084 60.8949L28.6762 60.7297L29.1131 54.7999C29.3529 51.538 29.6866 48.7378 29.8534 48.5769C30.3622 48.086 32.1286 50.7004 35.2282 56.5305C36.8519 59.5853 38.2987 62.0843 38.4436 62.0843C39.3686 62.0843 42.4363 60.6928 42.4363 60.2729C42.4363 59.9923 40.8193 56.8106 38.8429 53.2026L35.2496 46.642L37.158 44.2656C40.625 39.9488 39.2249 37.0711 33.7461 37.2548C32.1931 37.3068 29.7854 37.4439 28.3954 37.5598ZM76.3598 39.272C75.3315 39.8767 74.2402 41.2096 73.692 42.5317C72.5132 45.3747 72.4722 51.2975 73.6168 53.4328C74.7636 55.572 77.4359 56.8561 79.8375 56.4216C83.3241 55.7903 87.1186 51.084 85.1079 49.8855C84.7917 49.6969 83.3033 50.5357 81.8004 51.7499C78.7164 54.2402 78.1037 54.3973 77.2775 52.9089C76.2424 51.0423 76.6462 50.197 79.5246 48.2014C85.2983 44.2 85.5617 39.5278 80.0661 38.5855C78.6524 38.3433 77.6117 38.5362 76.3598 39.272ZM15.157 39.6367C17.0042 41.4193 15.763 44.5571 12.583 46.143C11.6467 46.6106 10.7504 46.8674 10.5914 46.7141C10.4325 46.5608 10.4813 44.7142 10.7004 42.6103C11.0902 38.864 11.1312 38.7855 12.6863 38.7855C13.5597 38.7855 14.6712 39.1685 15.157 39.6367ZM35.3698 39.1144C36.5138 39.5375 36.5183 41.9785 35.3788 43.5487C34.8952 44.2152 33.5051 45.2495 32.2897 45.8477L30.0803 46.9352V43.429C30.0803 40.6613 30.2875 39.8068 31.0631 39.3706C32.1819 38.7421 34.0623 38.63 35.3698 39.1144ZM45.463 39.8177C42.6458 41.4746 41.117 44.0093 40.8761 47.4196C40.5975 51.3625 41.495 52.6076 44.5604 52.5301C50.3992 52.3822 54.3868 45.9593 51.7241 40.9918C50.4082 38.5362 48.3094 38.1429 45.463 39.8177ZM61.6466 39.6118C55.3579 40.56 55.249 40.6141 55.4584 42.71C55.5556 43.6804 55.8875 44.4639 56.1964 44.4509C56.5053 44.4373 58.981 44.2249 61.6977 43.9784C64.4143 43.7313 66.7637 43.6522 66.9192 43.8018C67.5556 44.4162 62.7625 53.2318 61.0243 54.6427C59.3753 55.9816 58.7744 56.1241 54.7901 56.1241C50.6806 56.1241 50.3004 56.2227 49.2007 57.5713C47.518 59.6352 48.4419 60.1879 53.5736 60.1879C59.2956 60.1879 62.6188 58.629 65.5657 54.5631C67.6202 51.7282 70.6451 44.5511 71.382 40.7642L71.7667 38.7855L69.036 38.8478C67.5348 38.8819 64.2093 39.226 61.6466 39.6118ZM81.1893 41.992C81.1893 42.9798 76.7676 48.2459 76.3093 47.8037C75.7212 47.2364 77.3842 43.1461 78.7311 41.8463C80.2935 40.3394 81.1893 40.3925 81.1893 41.992ZM49.3826 44.5023C49.3242 46.1609 48.889 46.9563 47.2456 48.4095C46.1105 49.413 44.88 50.1385 44.511 50.0209C42.5739 49.4059 44.2807 44.2038 46.8626 42.8519C48.9356 41.7672 49.4674 42.1156 49.3826 44.5023ZM91.0517 44.168C88.4356 46.9568 87.7032 53.6707 89.6021 57.4549C90.9748 60.19 93.2421 61.5424 96.4558 61.5424C99.2876 61.5424 101.046 60.5384 102.295 58.2096C103.439 56.0748 102.977 55.0404 100.879 55.0404C99.5712 55.0404 98.9944 55.4067 98.3193 56.6659C97.6459 57.9219 97.0663 58.2914 95.7695 58.2914C93.3814 58.2914 91.8655 55.7481 91.8627 51.738C91.8599 48.1191 92.8883 46.913 95.9767 46.913C97.6386 46.913 98.0385 46.7103 98.0385 45.8678C98.0385 43.2258 93.0697 42.017 91.0517 44.168ZM120.785 45.8943C118.931 46.1501 114.304 46.3099 110.502 46.2492C102.88 46.1273 102.556 46.2579 102.54 49.4655L102.532 51.2054L107.446 51.3619L112.36 51.5185L112.387 60.1879L112.412 68.8572H114.633H116.853L117.007 60.0925L117.162 51.3278L118.973 50.9908C123.621 50.1266 126.147 49.4774 126.401 49.0814C126.552 48.844 126.52 47.8931 126.329 46.9688C125.949 45.1368 126.085 45.1634 120.785 45.8943Z" />
          </clipPath>
          <g clipPath="url(#logo)">
            <rect></rect>
          </g>
        </LoaderSvg>
      </Wrap>
    )
  );
};
