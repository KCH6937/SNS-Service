# SNS-Service
현재 개발 중인 SNS 서비스의 REST API 서버입니다.

## 개발 공수계산(total: 35h)
- 설계(11h)

  - DB(5h)
  
  - API(3h)

  - 프로젝트(6h)
    - 프로젝트 설계(typescript-express-starter 사용) : 30m 
    - (위험관리)프로젝트 구조 파악 : 4h
    - (위험관리)타입스크립트 학습 : 2h
- 개발(15h)

  - 사용자(6h)
    - 회원가입 + jwt : 4h
    - 로그인 : 1h
    - 회원탈퇴 : 1h

  - 게시글(9h)
    - (위험관리)게시글 조회수 처리 : 2h
      - 캐시(redis) 사용
    - 생성 + access_token : 3h
    - 수정 : 1h
    - 삭제 : 1h
    - 상세보기 : 1h
    - 목록 : 1h

- 배포
  - (위험관리)redis, mysql docker-compose 이슈해결 : 4h
  - EC2 보안설정(IAMP) : 1h
  - 실제 배포 : 1h

## 설계
### ERD 구조 설계
![personal-DB-image](https://user-images.githubusercontent.com/48710060/180148892-1ab21832-1e13-4dab-ace2-65ebe6d57cc8.png)
- 조회수는 캐시(redis)로 처리 예정
### 프로젝트 구조 설계
![스크린샷 2022-07-21 오후 3 56 27](https://user-images.githubusercontent.com/48710060/180149607-e7fb24a6-a7f1-4f40-890c-95bfe06d40f6.png)

