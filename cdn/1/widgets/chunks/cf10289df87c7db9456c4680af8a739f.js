"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[35644],{35644:(t,e,r)=>{r.d(e,{A:()=>et,B:()=>j,C:()=>G,D:()=>H,E:()=>C,F:()=>v,G:()=>J,H:()=>Q,I:()=>P,J:()=>K,L:()=>N,M:()=>I,O:()=>L,S:()=>U,T:()=>S,U:()=>q,V:()=>Y,a:()=>l,b:()=>T,c:()=>m,d:()=>g,e:()=>w,f:()=>d,g:()=>x,h:()=>O,i:()=>M,j:()=>R,k:()=>z,l:()=>E,m:()=>A,n:()=>st,o:()=>B,p:()=>b,q:()=>V,r:()=>rt,s:()=>X,t:()=>W,u:()=>p,v:()=>D,w:()=>F,x:()=>_,y:()=>Z,z:()=>k});var s=r(13019),n=r(55820),f=r(27157),i=(r(58574),r(47817));r(86977);class u{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===s&&(s=9*f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer,f=t*this.typedBufferStride,i=r*e.typedBufferStride;for(let t=0;t<9;++t)s[f+t]=n[i+t]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=9;class y{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===s&&(s=16*f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer,f=t*this.typedBufferStride,i=r*e.typedBufferStride;for(let t=0;t<16;++t)s[f+t]=n[i+t]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=16;class a{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=1;class h{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===s&&(s=2*f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return(0,s.r)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer,f=t*this.typedBufferStride,i=r*e.typedBufferStride;s[f]=n[i],s[f+1]=n[i+1]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=2;class o{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===s&&(s=3*f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return(0,n.o)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1],this.typedBuffer[t*this.typedBufferStride+2])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,s){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=s}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer,f=t*this.typedBufferStride,i=r*e.typedBufferStride;s[f]=n[i],s[f+1]=n[i+1],s[f+2]=n[i+2]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;class c{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===s&&(s=4*f.BYTES_PER_ELEMENT);const i=0===e.byteLength?0:r;this.typedBuffer=null==n?new f(e,i):new f(e,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return(0,f.r)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1],this.typedBuffer[t*this.typedBufferStride+2],this.typedBuffer[t*this.typedBufferStride+3])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2],this.typedBuffer[t*this.typedBufferStride+3]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,s,n){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=s,this.typedBuffer[t*this.typedBufferStride+3]=n}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer,f=t*this.typedBufferStride,i=r*e.typedBufferStride;s[f]=n[i],s[f+1]=n[i+1],s[f+2]=n[i+2],s[f+3]=n[i+3]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=4;class d extends a{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new d(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}d.ElementType="f32";class p extends h{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class l extends o{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new l(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}l.ElementType="f32";class b extends c{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class m extends u{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f32";class T extends u{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f64";class B extends y{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f32";class E extends y{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class M extends a{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="f64";class A extends h{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="f64";class S extends o{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="f64";class g extends c{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="f64";class O extends a{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="u8";class w extends h{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="u8";class L extends o{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u8";class _ extends c{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="u8";class x extends a{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="u16";class F extends h{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="u16";class C extends o{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="u16";class N extends c{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="u16";class v extends a{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="u32";class P extends h{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="u32";class q extends o{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="u32";class R extends c{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="u32";class Y extends a{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="i8";class I extends h{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="i8";class U extends o{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i8";class z extends c{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i8";class V extends a{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i16";class D extends h{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}static fromTypedArray(t,e){return new D(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}D.ElementType="i16";class k extends o{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i16";class j extends c{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="i16";class G extends a{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}static fromTypedArray(t,e){return new G(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}G.ElementType="i32";class H extends h{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}static fromTypedArray(t,e){return new H(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}H.ElementType="i32";class J extends o{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}static fromTypedArray(t,e){return new J(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}J.ElementType="i32";class Q extends c{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}static fromTypedArray(t,e){return new Q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}function K(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function W(t){switch(t){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function X(t){switch(t){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function Z(t){switch(t){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}Q.ElementType="i32";class ${constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const e of t.fieldNames){const r=t.fields.get(e);this[e]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const r=this[t];return r&&r.elementCount===e.ElementCount&&r.elementType===e.ElementType?r:null}slice(t,e){return new $(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e,r,s){const n=this.stride;if(n%4==0){const f=new Uint32Array(t.buffer,e*n,s*n/4);new Uint32Array(this.buffer,r*n,s*n/4).set(f)}else{const f=new Uint8Array(t.buffer,e*n,s*n);new Uint8Array(this.buffer,r*n,s*n).set(f)}}}class tt{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,e){return this.appendField(t,p,e),this}vec2f64(t,e){return this.appendField(t,A,e),this}vec3f(t,e){return this.appendField(t,l,e),this}vec3f64(t,e){return this.appendField(t,S,e),this}vec4f(t,e){return this.appendField(t,b,e),this}vec4f64(t,e){return this.appendField(t,g,e),this}mat3f(t,e){return this.appendField(t,m,e),this}mat3f64(t,e){return this.appendField(t,T,e),this}mat4f(t,e){return this.appendField(t,B,e),this}mat4f64(t,e){return this.appendField(t,E,e),this}vec4u8(t,e){return this.appendField(t,_,e),this}f32(t,e){return this.appendField(t,d,e),this}f64(t,e){return this.appendField(t,M,e),this}u8(t,e){return this.appendField(t,O,e),this}u16(t,e){return this.appendField(t,x,e),this}i8(t,e){return this.appendField(t,Y,e),this}vec2i8(t,e){return this.appendField(t,I,e),this}vec2i16(t,e){return this.appendField(t,D,e),this}vec2u8(t,e){return this.appendField(t,w,e),this}vec4u16(t,e){return this.appendField(t,N,e),this}u32(t,e){return this.appendField(t,v,e),this}appendField(t,e,r){const s=e.ElementCount*K(e.ElementType),n=this.stride;this.fields.set(t,{size:s,constructor:e,offset:n,optional:r}),this.stride+=s,this.fieldNames.push(t)}alignTo(t){return this.stride=Math.floor((this.stride+t-1)/t)*t,this}hasField(t){return this.fieldNames.indexOf(t)>=0}createBuffer(t){return new $(this,t)}createView(t){return new $(this,t)}clone(){const t=new tt;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(((e,r)=>t.fields.set(r,e))),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t}}function et(){return new tt}function rt(t,e){const r=(0,n.s)(t),s=(0,i.cp)(t[2]/r),f=Math.atan2(t[1]/r,t[0]/r);return(0,n.o)(e,r,s,f),e}function st(t,e,r){const s=r[0]-e[0],n=r[1]-e[1],f=r[2]-e[2];let i=s*s+n*n+f*f;return i?(i=1/Math.sqrt(i),t[0]=s*i,t[1]=n*i,t[2]=f*i,t):(t[0]=0,t[1]=0,t[2]=0,t)}class nt{constructor(t,e){this.min=t,this.max=e,this.range=e-t}ndiff(t,e=0){return Math.ceil((t-e)/this.range)*this.range+e}_normalize(t,e,r,s=0,n=!1){return(r-=s)<t?r+=this.ndiff(t-r):r>e&&(r-=this.ndiff(r-e)),n&&r===e&&(r=t),r+s}normalize(t,e=0,r=!1){return this._normalize(this.min,this.max,t,e,r)}clamp(t,e=0){return(0,i.cq)(t-e,this.min,this.max)+e}monotonic(t,e,r){return t<e?e:e+this.ndiff(t-e,r)}minimalMonotonic(t,e,r){return this._normalize(t,t+this.range,e,r)}center(t,e,r){return e=this.monotonic(t,e,r),this.normalize((t+e)/2,r)}diff(t,e,r){return this.monotonic(t,e,r)-t}shortestSignedDiff(t,e){t=this.normalize(t);const r=(e=this.normalize(e))-t,s=e<t?this.minimalMonotonic(t,e)-t:e-this.minimalMonotonic(e,t);return Math.abs(r)<Math.abs(s)?r:s}contains(t,e,r){return e=this.minimalMonotonic(t,e),(r=this.minimalMonotonic(t,r))>t&&r<e}}function ft(t){for(const e in t){const r=t[e];r instanceof Function&&(t[e]=r.bind(t))}return t}ft(new nt(0,2*Math.PI)),ft(new nt(-Math.PI,Math.PI)),ft(new nt(0,360))},13019:(t,e,r)=>{r.d(e,{D:()=>d,a:()=>n,d:()=>a,r:()=>f});var s=r(55820);function n(t,e){return t[0]=e[0],t[1]=e[1],t}function f(t,e,r){return t[0]=e,t[1]=r,t}function i(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function u(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t}function y(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t}function a(t,e){const r=e[0]-t[0],s=e[1]-t[1];return Math.sqrt(r*r+s*s)}function h(t,e){const r=e[0]-t[0],s=e[1]-t[1];return r*r+s*s}function o(t){const e=t[0],r=t[1];return Math.sqrt(e*e+r*r)}function c(t){const e=t[0],r=t[1];return e*e+r*r}function d(t,e,r){const s=e[0],n=e[1];return t[0]=r[0]*s+r[2]*n+r[4],t[1]=r[1]*s+r[3]*n+r[5],t}const p=o,l=i,b=u,m=y,T=a,B=h,E=c;Object.freeze({__proto__:null,copy:n,set:f,add:function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t},subtract:i,multiply:u,divide:y,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t},min:function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t},max:function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t},scale:function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t},scaleAndAdd:function(t,e,r,s){return t[0]=e[0]+r[0]*s,t[1]=e[1]+r[1]*s,t},distance:a,squaredDistance:h,length:o,squaredLength:c,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},normalize:function(t,e){const r=e[0],s=e[1];let n=r*r+s*s;return n>0&&(n=1/Math.sqrt(n),t[0]=e[0]*n,t[1]=e[1]*n),t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},cross:function(t,e,r){const s=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=s,t},lerp:function(t,e,r,s){const n=e[0],f=e[1];return t[0]=n+s*(r[0]-n),t[1]=f+s*(r[1]-f),t},random:function(t,e){e=e||1;const r=2*(0,s.t)()*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t},transformMat2:function(t,e,r){const s=e[0],n=e[1];return t[0]=r[0]*s+r[2]*n,t[1]=r[1]*s+r[3]*n,t},transformMat2d:d,transformMat3:function(t,e,r){const s=e[0],n=e[1];return t[0]=r[0]*s+r[3]*n+r[6],t[1]=r[1]*s+r[4]*n+r[7],t},transformMat4:function(t,e,r){const s=e[0],n=e[1];return t[0]=r[0]*s+r[4]*n+r[12],t[1]=r[1]*s+r[5]*n+r[13],t},rotate:function(t,e,r,s){const n=e[0]-r[0],f=e[1]-r[1],i=Math.sin(s),u=Math.cos(s);return t[0]=n*u-f*i+r[0],t[1]=n*i+f*u+r[1],t},angle:function(t,e){const r=t[0],s=t[1],n=e[0],f=e[1];let i=r*r+s*s;i>0&&(i=1/Math.sqrt(i));let u=n*n+f*f;u>0&&(u=1/Math.sqrt(u));const y=(r*n+s*f)*i*u;return y>1?0:y<-1?Math.PI:Math.acos(y)},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,e){return t[0]===e[0]&&t[1]===e[1]},equals:function(t,e){const r=t[0],n=t[1],f=e[0],i=e[1];return Math.abs(r-f)<=s.a*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(n-i)<=s.a*Math.max(1,Math.abs(n),Math.abs(i))},len:p,sub:l,mul:b,div:m,dist:T,sqrDist:B,sqrLen:E})},27157:(t,e,r)=>{r.d(e,{D:()=>B,E:()=>E,_:()=>b,a:()=>n,g:()=>l,j:()=>m,l:()=>h,q:()=>p,r:()=>f,s:()=>i,x:()=>d,y:()=>T});var s=r(55820);function n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function f(t,e,r,s,n){return t[0]=e,t[1]=r,t[2]=s,t[3]=n,t}function i(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function u(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function y(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function a(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function h(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function o(t,e){const r=e[0]-t[0],s=e[1]-t[1],n=e[2]-t[2],f=e[3]-t[3];return Math.sqrt(r*r+s*s+n*n+f*f)}function c(t,e){const r=e[0]-t[0],s=e[1]-t[1],n=e[2]-t[2],f=e[3]-t[3];return r*r+s*s+n*n+f*f}function d(t){const e=t[0],r=t[1],s=t[2],n=t[3];return Math.sqrt(e*e+r*r+s*s+n*n)}function p(t){const e=t[0],r=t[1],s=t[2],n=t[3];return e*e+r*r+s*s+n*n}function l(t,e){const r=e[0],s=e[1],n=e[2],f=e[3];let i=r*r+s*s+n*n+f*f;return i>0&&(i=1/Math.sqrt(i),t[0]=r*i,t[1]=s*i,t[2]=n*i,t[3]=f*i),t}function b(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function m(t,e,r,s){const n=e[0],f=e[1],i=e[2],u=e[3];return t[0]=n+s*(r[0]-n),t[1]=f+s*(r[1]-f),t[2]=i+s*(r[2]-i),t[3]=u+s*(r[3]-u),t}function T(t,e,r){const s=e[0],n=e[1],f=e[2],i=e[3];return t[0]=r[0]*s+r[4]*n+r[8]*f+r[12]*i,t[1]=r[1]*s+r[5]*n+r[9]*f+r[13]*i,t[2]=r[2]*s+r[6]*n+r[10]*f+r[14]*i,t[3]=r[3]*s+r[7]*n+r[11]*f+r[15]*i,t}function B(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function E(t,e){const r=t[0],n=t[1],f=t[2],i=t[3],u=e[0],y=e[1],a=e[2],h=e[3];return Math.abs(r-u)<=s.a*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(n-y)<=s.a*Math.max(1,Math.abs(n),Math.abs(y))&&Math.abs(f-a)<=s.a*Math.max(1,Math.abs(f),Math.abs(a))&&Math.abs(i-h)<=s.a*Math.max(1,Math.abs(i),Math.abs(h))}const M=u,A=y,S=a,g=o,O=c,w=d,L=p;Object.freeze({__proto__:null,copy:n,set:f,add:i,subtract:u,multiply:y,divide:a,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},min:function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t},max:function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:h,scaleAndAdd:function(t,e,r,s){return t[0]=e[0]+r[0]*s,t[1]=e[1]+r[1]*s,t[2]=e[2]+r[2]*s,t[3]=e[3]+r[3]*s,t},distance:o,squaredDistance:c,length:d,squaredLength:p,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},normalize:l,dot:b,lerp:m,random:function(t,e){let r,n,f,i,u,y;e=e||1;do{r=2*(0,s.t)()-1,n=2*(0,s.t)()-1,u=r*r+n*n}while(u>=1);do{f=2*(0,s.t)()-1,i=2*(0,s.t)()-1,y=f*f+i*i}while(y>=1);const a=Math.sqrt((1-u)/y);return t[0]=e*r,t[1]=e*n,t[2]=e*f*a,t[3]=e*i*a,t},transformMat4:T,transformQuat:function(t,e,r){const s=e[0],n=e[1],f=e[2],i=r[0],u=r[1],y=r[2],a=r[3],h=a*s+u*f-y*n,o=a*n+y*s-i*f,c=a*f+i*n-u*s,d=-i*s-u*n-y*f;return t[0]=h*a+d*-i+o*-y-c*-u,t[1]=o*a+d*-u+c*-i-h*-y,t[2]=c*a+d*-y+h*-u-o*-i,t[3]=e[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:B,equals:E,sub:M,mul:A,div:S,dist:g,sqrDist:O,len:w,sqrLen:L})}}]);