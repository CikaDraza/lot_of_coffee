import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section id="hero" className="grid grid-cols-2 gap-4">
        <div>
          <div className="relative w-[445px] h-[145px]">
            <Image src={"/heading_hero.png"} alt="Coffee" fill />
          </div>
          <div className="grid grid-cols-2">
            <div className="pt-4 columns-1">
              <p className="text-4xl text-gray-700 tracking-wider">is all about choice</p>
              <p className="pt-4 text-gray-500 break-inside-avoid-column">It's not an exact science to make good coffee, try how we do it.</p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center pt-16">
            <Link href={"/menu"} className="w-1/4">
              <button className="w-full text-white bg-brand-900 hover:bg-brand-800 focus:outline-none text-xl rounded-full py-4">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-20">
            <div className="pt-4 columns-1">
              <div className="flex justify-between items-center">
                <div className="relative size-24 mr-4">
                  <div className="absolute size-20 bg-brand-800/10 rounded-full top-0 left-0" />
                  <div className="absolute z-1 w-[50px] h-[50px]" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Image src={"/espresso.svg"} alt="Espresso" width={50} height={50} />
                  </div>
                </div>
                <div>
                  <h3 className="w-full text-2xl font-semibold w-full">Espresso</h3>
                  <p className="text-gray-500">Coffee-Brewing Method Of Italian Origin</p>
                </div>
              </div>
            </div>
            <div className="pt-4 columns-1">
              <div className="flex justify-between items-center">
                <div className="relative size-24 mr-4">
                  <div className="absolute size-20 bg-brand-800/10 rounded-full top-0 left-0" />
                  <div className="absolute z-1 w-[50px] h-[50px]" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Image src={"/macchiato.svg"} alt="Macchiato" width={50} height={50} />
                  </div>
                </div>
                <div>
                  <h3 className="w-full text-2xl font-semibold w-full">Macchiato</h3>
                  <p className="text-gray-500">Coffee Drinks Whit A Small Amount Of Milk</p>
                </div>
              </div>
            </div>
            <div className="pt-4 columns-1">
              <div className="flex justify-between items-center">
                <div className="relative size-24 mr-4">
                  <div className="absolute size-20 bg-brand-800/10 rounded-full top-0 left-0" />
                  <div className="absolute z-1 w-[50px] h-[50px]" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Image src={"/latte.svg"} alt="Latte Coffee" width={50} height={50} />
                  </div>
                </div>
                <div>
                  <h3 className="w-full text-2xl font-semibold w-full">Latte</h3>
                  <p className="text-gray-500">Coffee Drinks Whit A Large Amount Of Milk</p>
                </div>
              </div>
            </div>
            <div className="pt-4 columns-1">
              <div className="flex justify-between items-center">
                <div className="relative size-24 mr-4">
                  <div className="absolute size-20 bg-brand-800/10 rounded-full top-0 left-0" />
                  <div className="absolute z-1 w-[50px] h-[50px]" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Image src={"/cappuccino.svg"} alt="Cappuccino" width={50} height={50} />
                  </div>
                </div>
                <div>
                  <h3 className="w-full text-2xl font-semibold w-full">Cappuccino</h3>
                  <p className="text-gray-500">Prepered With Steamed Milk Foam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-10 w-full h-full">
            <Popover>
              <PopoverTrigger className="bg-brand-800 text-white size-8 rounded-full outline-2 outline-offset-4 outline-solid outline-white flex justify-center items-center">
                <div className="absolute size-12 -z-1 border border-white rounded-full" />
                <Plus className="absolute z-10"  />
              </PopoverTrigger>
              <PopoverContent className="relative -mt-[50%] bg-brand-900 border-none rounded-full size-60 p-6 text-white text-center">
                <div className="absolute -top-2.5 -left-2.5 w-[260px] h-[260px] -z-1 border border-white rounded-full" />
                <div className="relative z-10 top-0 left-0 fight-0 bottom-0 inset-0">
                  <h4 className="text-xl font-bold p-2">Coffee</h4>
                  <hr />
                  <p className="p-2 text-sm">A cup of coffee on a warm summer day reminds you there's a bright side to every day</p>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="relative top-[40%] bg-brand-800 text-white size-8 rounded-full outline-2 outline-offset-4 outline-solid outline-white flex justify-center items-center">
                <div className="absolute size-12 -z-1 border border-white rounded-full" />
                <Plus className="absolute z-10"  />
              </PopoverTrigger>
              <PopoverContent className="relative -mt-[50%] bg-brand-900 border-none rounded-full size-60 p-6 text-white text-center">
                <div className="absolute -top-2.5 -left-2.5 w-[260px] h-[260px] -z-1 border border-white rounded-full" />
                <div className="relative z-10 top-0 left-0 fight-0 bottom-0 inset-0">
                  <h4 className="text-xl font-bold p-2">Arabica coffee</h4>
                  <hr />
                  <p className="p-2 text-xs">Arabica coffee has a mild acidity and is usually less bitter compared to other types of coffee. Its flavor is often described as rich, fruity and floral, with subtle hints of chocolate or nuts.</p>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="relative top-[60%] left-[7%] bg-brand-800 text-white size-8 rounded-full outline-2 outline-offset-4 outline-solid outline-white flex justify-center items-center">
                <div className="absolute size-12 -z-1 border border-white rounded-full" />
                <Plus className="absolute z-10"  />
              </PopoverTrigger>
              <PopoverContent className="relative -mt-[50%] bg-brand-900 border-none rounded-full size-60 p-6 text-white text-center">
                <div className="absolute -top-2.5 -left-2.5 w-[260px] h-[260px] -z-1 border border-white rounded-full" />
                <div className="relative z-10 top-0 left-0 fight-0 bottom-0 inset-0">
                  <h4 className="text-xl font-bold p-2">Fans Of Coffee</h4>
                  <hr />
                  <p className="p-2 text-sm">As fans of the world's most popular drink,
                  we always have the option to choose between a specialty or regular cup of coffee</p>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="absolute -top-[10%] left-[50%] bg-brand-800 text-white size-6 rounded-full outline-2 outline-offset-4 outline-solid outline-white flex justify-center items-center">
                <div className="absolute size-10 -z-1 border border-white rounded-full" />
                <Plus className="absolute z-10"  />
              </PopoverTrigger>
              <PopoverContent className="relative -mt-[50%] bg-brand-900 border-none rounded-full size-60 p-6 text-white text-center">
                <div className="absolute -top-2.5 -left-2.5 w-[260px] h-[260px] -z-1 border border-white rounded-full" />
                <div className="relative z-10 top-0 left-0 fight-0 bottom-0 inset-0">
                  <h4 className="text-xl font-bold p-2">Our Blends</h4>
                  <hr />
                  <p className="p-2 text-sm">Where the perfection of the aroma meets the carefully selected processing process. Our roasted coffee, characterized by its sophisticated taste</p>
                </div>
              </PopoverContent>
            </Popover>
            <Popover defaultOpen={true}>
              <PopoverTrigger className="data-[state=open] absolute top-[5%] left-[70%] bg-brand-800 text-white size-6 rounded-full outline-2 outline-offset-4 outline-solid outline-white flex justify-center items-center">
                <div className="absolute size-10 -z-1 border border-white rounded-full" />
                <Plus className="absolute z-10"  />
              </PopoverTrigger>
              <PopoverContent className="relative -mt-[50%] bg-brand-900 border-none rounded-full size-60 p-6 text-white text-center">
                <div className="absolute -top-2.5 -left-2.5 w-[260px] h-[260px] -z-1 border border-white rounded-full" />
                <div className="relative z-10 top-0 left-0 fight-0 bottom-0 inset-0">
                  <h4 className="text-xl font-bold p-2">Our Goal</h4>
                  <hr />
                  <p className="p-2 text-sm">Our goal has always been for the consumer to get pure, real coffee in modern packaging, made according to current standards and our family recipe.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[180%] h-[150%] absolute z-0 -top-16 -right-[60%]">
            <Image src={"/cup_of_coffee.png"} alt="coffee cup" fill />
          </div>
        </div>
      </section>
      <section id="coffe-to-go" className="py-20 my-20 grid grid-cols-2 gap-4">
        <div className="py-20">
          <h2 className="text-7xl font-black tracking-tight text-brand-900">Coffee To Go</h2>
          <p className="text-gray-700 pt-6 pb-4">With so many options available at every coffee shop these days, choosing what to drink can seem a little intimidating. </p>
          <div className="w-fill h-[1px] bg-brand-900" />
          <div className="py-8">
            <label className="text-gray-500">Choose a kind of coffee?</label>
            <RadioGroup defaultValue="espresso">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="espresso" id="espresso" />
                  <label htmlFor="espresso">Espresso</label>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="cappucciono" id="cappucciono" />
                  <label htmlFor="cappuccino">Cappuccino</label>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="macchiato" id="macchiato" />
                  <label htmlFor="macchiato">Macchiato</label>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="latte" id="latte" />
                  <label htmlFor="latte">Latte</label>
                </div>
              </div>
            </RadioGroup>
            <div className="w-fill h-[1px] bg-brand-900 my-8" />
            <label className="text-gray-500">Size?</label>
            <RadioGroup defaultValue="small">
              <div className="flex justify-start gap-12">
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="small" id="small" />
                  <label htmlFor="small">Small</label>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="medium" id="medium" />
                  <label htmlFor="medium">Medium</label>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <RadioGroupItem value="large" id="large" />
                  <label htmlFor="large">Large</label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <Button className="text-lg p-6">Order Now</Button>
        </div>
        <div className="py-20">
          <div className="relative w-[765.7px] h-[644.8px]">
            <Image src={"/coffee_to_go.png"} alt="Coffee" fill />
          </div>
        </div>
      </section>
    </div>
  );
}
