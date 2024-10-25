function Home() {
  return (
    <main className="flex flex-col gap-3 p-3 items-center min-h-screen">
      <div className="bg-white max-w-[90%] sm:max-w-[50%] p-3 mt-3 rounded-lg opacity-80 shadow-lg shadow-white">
        <h2 className="font-bold font-custom mb-3">Welcome to Car Batteries</h2>
        <p>
          Our Car Battery App simplifies the process of finding, selecting, and
          purchasing the right battery for your vehicle. Whether you need a
          replacement or just want to browse different options, the app offers a
          user-friendly experience to ensure you get the best battery for your
          car.
        </p>
      </div>

      <div className="flex flex-col mt-6 p-3">
        <img
          className="w-[70%] lg:w-[50%] mx-auto"
          src="https://placehold.co/500x300"
          alt="icon"
        />
        <div class="flex gap-3 items-center mt-4">
          <img src="https://placehold.co/40x40" alt="mewicon" />
          <h2 className="text-white font-bold font-custom">
            About our company
          </h2>
        </div>
        <div className="flex flex-col bg-white rounded-lg p-3 gap-3 shadow-lg shadow-white">
          <div className="flex gap-3">
            <img
              className="size-5"
              src="https://placehold.co/20"
              alt="newicon"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime magni aliquid repellat harum, velit autem at magnam temporibus vitae quibusdam impedit eos delectus vero dolorem. At temporibus cum alias neque!
            </p>
          </div>
          <div className="flex gap-3">
            <img className="size-5" src="https://placehold.co/20" alt="icon" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus doloribus officia assumenda at dicta commodi doloremque quia error. Ipsa minus dolore repudiandae. Eligendi, quo. Quo assumenda quod, cupiditate, dicta iste eligendi unde amet sint nobis repellat ratione! Amet earum commodi assumenda ducimus labore iste consectetur sint, dolorum eos corporis ipsam consequuntur? Aspernatur corrupti nemo corporis?
            </p>
          </div>
          <div className="flex gap-3">
            <img className="size-5" src="https://placehold.co/20" alt="icon" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum iste, amet earum nulla ex porro ea aut veniam eum quo. Mollitia in doloremque nesciunt quisquam vitae exercitationem esse amet aliquam ut! Alias deleniti atque porro.
            </p>
          </div>
        </div>
      </div>

      <div className="self-start w-full flex flex-col gap-4">
        <h2 className="text-white font-bold text-center font-custom">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="flex group items-center gap-3 group bg-purple-600 max-w-max rounded-full p-2">
            <svg
              className="size-8"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Whatsapp-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -360.000000)"
                    fill="#67C15E"
                  >
                    {" "}
                    <path
                      d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                      id="Whatsapp"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <div className="lg:-translate-x-full lg:scale-0 lg:group-hover:scale-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-in-out">
              XXX-XXX-XXXX
            </div>
          </div>

          <div className="flex items-center group gap-3 bg-purple-600 max-w-max rounded-full p-2">
            <svg
              className="size-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                  fill="#EA4335"
                ></path>{" "}
                <path
                  d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                  fill="#FBBC05"
                ></path>{" "}
                <path
                  d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                  fill="#34A853"
                ></path>{" "}
                <path
                  d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                  fill="#C5221F"
                ></path>{" "}
                <path
                  d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                  fill="#C5221F"
                ></path>{" "}
                <path
                  d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                  fill="#C5221F"
                ></path>{" "}
                <path
                  d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                  fill="#4285F4"
                ></path>{" "}
              </g>
            </svg>
            <div className="lg:-translate-x-full lg:scale-0 lg:group-hover:scale-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-in-out">abc@example.com</div>
          </div>

          <div className="flex items-center group gap-3 bg-purple-600 max-w-max rounded-full p-2">
            <svg
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                  fill="#1C274C"
                ></path>{" "}
                <path
                  d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                  fill="#1C274C"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
                  fill="#1C274C"
                ></path>{" "}
              </g>
            </svg>
            <div className="lg:-translate-x-full lg:scale-0 lg:group-hover:scale-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-in-out">800-111-222</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Home };
