export interface City {
  code: string; // 도시의 코드, 구분자 역할 예) seoul
  name: string; // 도시의 한글 이름 예) 서울
  nameEn: string; // 도시의 영어 이름 예) Seoul
  thumbnail: string; // 도시의 썸네일 이미지 URL
  description: string;
  timezone: string; // 도시의 시간대 예) Asia/Seoul
  flightHour: number; // 서올로부터 비행시간 예) 2
  timezoneOffset: number; // 서울로부터 시차 예) 9
  coordinates: {
    lat: number;
    lng: number;
  };
  country: Country;
}

export interface Country {
  code: string; // 국가의 코드, 구분자 역할 예) kr
  name: string; // 국가의 한글 이름 예) 대한민국
  nameEn: string; // 국가의 영어 이름 예) South Korea
  voltage: string; // 국가의 전압 예) 220V
  visa: {
    required: boolean; // 비자 필요 여부 예) true
    duration: string; // 비자 체류 기간 예) 90
  };
  continent:
    | "Asia"
    | "Europe"
    | "North America"
    | "South America"
    | "Africa"
    | "Oceania"
    | "Antarctica";
}

export interface Place {
  name: string;
  thumbnail: string;
  category: "attraction" | "restaurant" | "cafe";
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  likes: number;
  rating: number;
  city: City["code"];
}
